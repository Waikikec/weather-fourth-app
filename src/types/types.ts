export type OptionType = {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

export type ForecastEntry = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  pop: number;
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}

export type ForecastResponse = {
  city: {
    coord: {
      lat: number,
      lon: number,
    }
    country: string,
    id: number,
    name: string,
    population: number,
    sunrise: number,
    sunset: number,
    timezone: number,
  }
  list: ForecastEntry[]
}