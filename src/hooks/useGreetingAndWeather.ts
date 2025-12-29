// ============================================================================
// GREETING & WEATHER HOOK
// Dynamic greeting based on time + local temperature via Open-Meteo API
// ============================================================================

import { useState, useEffect } from 'react';

interface GreetingData {
  greeting: string;
  emoji: string;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
}

interface WeatherData {
  temperature: number;
  description: string;
  icon: string;
  isLoading: boolean;
  error: string | null;
}

interface Location {
  latitude: number;
  longitude: number;
  city?: string;
}

// Get greeting based on hour
function getGreeting(hour: number): GreetingData {
  if (hour >= 5 && hour < 12) {
    return { greeting: 'Bom dia', emoji: '☀️', timeOfDay: 'morning' };
  } else if (hour >= 12 && hour < 18) {
    return { greeting: 'Boa tarde', emoji: '🌤️', timeOfDay: 'afternoon' };
  } else if (hour >= 18 && hour < 22) {
    return { greeting: 'Boa noite', emoji: '🌅', timeOfDay: 'evening' };
  } else {
    return { greeting: 'Boa noite', emoji: '🌙', timeOfDay: 'night' };
  }
}

// Get weather icon based on WMO code
function getWeatherIcon(code: number): string {
  const icons: Record<number, string> = {
    0: '☀️',   // Clear sky
    1: '🌤️',   // Mainly clear
    2: '⛅',   // Partly cloudy
    3: '☁️',   // Overcast
    45: '🌫️',  // Fog
    48: '🌫️',  // Depositing rime fog
    51: '🌧️',  // Drizzle light
    53: '🌧️',  // Drizzle moderate
    55: '🌧️',  // Drizzle dense
    61: '🌧️',  // Rain slight
    63: '🌧️',  // Rain moderate
    65: '🌧️',  // Rain heavy
    71: '🌨️',  // Snow fall slight
    73: '🌨️',  // Snow fall moderate
    75: '🌨️',  // Snow fall heavy
    80: '🌦️',  // Rain showers slight
    81: '🌦️',  // Rain showers moderate
    82: '🌦️',  // Rain showers violent
    95: '⛈️',  // Thunderstorm
    96: '⛈️',  // Thunderstorm with hail
    99: '⛈️',  // Thunderstorm with heavy hail
  };
  return icons[code] || '🌡️';
}

function getWeatherDescription(code: number): string {
  const descriptions: Record<number, string> = {
    0: 'Céu limpo',
    1: 'Poucas nuvens',
    2: 'Parcialmente nublado',
    3: 'Nublado',
    45: 'Neblina',
    48: 'Neblina',
    51: 'Garoa leve',
    53: 'Garoa',
    55: 'Garoa forte',
    61: 'Chuva leve',
    63: 'Chuva',
    65: 'Chuva forte',
    71: 'Neve leve',
    73: 'Neve',
    75: 'Neve forte',
    80: 'Pancadas de chuva',
    81: 'Chuva moderada',
    82: 'Chuva intensa',
    95: 'Tempestade',
    96: 'Tempestade com granizo',
    99: 'Tempestade severa',
  };
  return descriptions[code] || 'Variável';
}

export function useGreetingAndWeather() {
  const [greeting, setGreeting] = useState<GreetingData>(getGreeting(new Date().getHours()));
  const [weather, setWeather] = useState<WeatherData>({
    temperature: 0,
    description: '',
    icon: '',
    isLoading: true,
    error: null,
  });
  const [location, setLocation] = useState<Location | null>(null);

  // Update greeting every minute
  useEffect(() => {
    const updateGreeting = () => {
      setGreeting(getGreeting(new Date().getHours()));
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  // Get user location
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.warn('Geolocation error:', error);
          // Default to São Paulo if geolocation fails
          setLocation({
            latitude: -23.5505,
            longitude: -46.6333,
            city: 'São Paulo',
          });
        }
      );
    } else {
      // Default to São Paulo
      setLocation({
        latitude: -23.5505,
        longitude: -46.6333,
        city: 'São Paulo',
      });
    }
  }, []);

  // Fetch weather when location is available
  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      try {
        // Using Open-Meteo API (free, no API key needed)
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,weather_code&timezone=auto`
        );

        if (!response.ok) {
          throw new Error('Weather API error');
        }

        const data = await response.json();
        const temp = Math.round(data.current.temperature_2m);
        const code = data.current.weather_code;

        setWeather({
          temperature: temp,
          description: getWeatherDescription(code),
          icon: getWeatherIcon(code),
          isLoading: false,
          error: null,
        });
      } catch (error) {
        setWeather((prev) => ({
          ...prev,
          isLoading: false,
          error: 'Não foi possível obter o clima',
        }));
      }
    };

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [location]);

  return { greeting, weather, location };
}

// Format time for display
export function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }).format(time);

  return { time, formatted };
}
