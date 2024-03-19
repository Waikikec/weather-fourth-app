import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"
import { ForecastResponse, OptionType } from "../types/types"

const useForecast = () => {
  const [city, setCity] = useState<OptionType | null>(null)
  const [userInput, setUserInput] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [forecast, setForecast] = useState<ForecastResponse | null>(null)

  const getSearchOptions = async (userInput: string) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WEATHER_BASE_API_URL}/geo/1.0/direct?q=${userInput.trim()}&limit=5&lang=en&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      setOptions(response.data);
    } catch (error) {
      console.error('Error fetching sarch options:', error);
    }
  }

  const getForecastByCoordinates = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WEATHER_BASE_API_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=en&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );

      setForecast(response.data);
    } catch (error) {
      console.error("Error fetching forecast by coordinates:", error);
    }
  }

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        getForecastByCoordinates(latitude, longitude);
      }, (error) => {
        console.error('Error getting current location:', error);
      })
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  const onOptionSelect = (option: OptionType) => {
    setCity(option);
  }

  const onSubmit = () => {
    if (!city) return;
    getForecastByCoordinates(city.lat, city.lon);
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    if (value.trim() !== '') {
      getSearchOptions(value.trim())
    }
  }

  useEffect(() => {
    if (!city) {
      getCurrentLocation();
    } else {
      setUserInput(city.name);
      setOptions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return {
    forecast,
    options,
    userInput,
    onOptionSelect,
    onSubmit,
    onInputChange,
    getSearchOptions, // Expose for testing
    getForecastByCoordinates, // Expose for testing
  }
}

export default useForecast