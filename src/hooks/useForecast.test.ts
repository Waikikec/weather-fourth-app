import { act, renderHook } from '@testing-library/react';
import axios from 'axios';
import useForecast from './useForecast';

jest.mock('axios');

describe('useForecast', () => {
  const mockResponse = {
    data: {
      "cod": "200",
      "message": 0,
      "cnt": 40,
      "list": [
        {
          "dt": 1710882000,
          "main": {
            "temp": 4.18,
            "feels_like": 4.18,
            "temp_min": 3.59,
            "temp_max": 4.18,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 940,
            "humidity": 54,
            "temp_kf": 0.59
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10n"
            }
          ],
          "clouds": {
            "all": 75
          },
          "wind": {
            "speed": 0.81,
            "deg": 346,
            "gust": 2.31
          },
          "visibility": 10000,
          "pop": 0.6,
          "rain": {
            "3h": 0.38
          },
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-19 21:00:00"
        },
        {
          "dt": 1710892800,
          "main": {
            "temp": 3.61,
            "feels_like": 1.34,
            "temp_min": 2.47,
            "temp_max": 3.61,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 941,
            "humidity": 59,
            "temp_kf": 1.14
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 77
          },
          "wind": {
            "speed": 2.41,
            "deg": 299,
            "gust": 4.24
          },
          "visibility": 10000,
          "pop": 0.3,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-20 00:00:00"
        },
        {
          "dt": 1710903600,
          "main": {
            "temp": 2.3,
            "feels_like": -0.12,
            "temp_min": 1.36,
            "temp_max": 2.3,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 941,
            "humidity": 64,
            "temp_kf": 0.94
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 30
          },
          "wind": {
            "speed": 2.32,
            "deg": 291,
            "gust": 3.83
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-20 03:00:00"
        },
        {
          "dt": 1710914400,
          "main": {
            "temp": 2.49,
            "feels_like": -0.13,
            "temp_min": 2.49,
            "temp_max": 2.49,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 943,
            "humidity": 62,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 6
          },
          "wind": {
            "speed": 2.56,
            "deg": 289,
            "gust": 4.3
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-20 06:00:00"
        },
        {
          "dt": 1710925200,
          "main": {
            "temp": 6.76,
            "feels_like": 4.34,
            "temp_min": 6.76,
            "temp_max": 6.76,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 943,
            "humidity": 49,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 3
          },
          "wind": {
            "speed": 3.43,
            "deg": 305,
            "gust": 3.86
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-20 09:00:00"
        },
        {
          "dt": 1710936000,
          "main": {
            "temp": 9.93,
            "feels_like": 8.04,
            "temp_min": 9.93,
            "temp_max": 9.93,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 942,
            "humidity": 42,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 4
          },
          "wind": {
            "speed": 3.73,
            "deg": 302,
            "gust": 4.1
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-20 12:00:00"
        },
        {
          "dt": 1710946800,
          "main": {
            "temp": 9.76,
            "feels_like": 7.67,
            "temp_min": 9.76,
            "temp_max": 9.76,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 942,
            "humidity": 45,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 8
          },
          "wind": {
            "speed": 4.09,
            "deg": 291,
            "gust": 4.25
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-20 15:00:00"
        },
        {
          "dt": 1710957600,
          "main": {
            "temp": 6.46,
            "feels_like": 4.68,
            "temp_min": 6.46,
            "temp_max": 6.46,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 943,
            "humidity": 59,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 4
          },
          "wind": {
            "speed": 2.44,
            "deg": 286,
            "gust": 4.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-20 18:00:00"
        },
        {
          "dt": 1710968400,
          "main": {
            "temp": 5.08,
            "feels_like": 3.71,
            "temp_min": 5.08,
            "temp_max": 5.08,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 944,
            "humidity": 64,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 4
          },
          "wind": {
            "speed": 1.77,
            "deg": 271,
            "gust": 3.19
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-20 21:00:00"
        },
        {
          "dt": 1710979200,
          "main": {
            "temp": 3.93,
            "feels_like": 2.28,
            "temp_min": 3.93,
            "temp_max": 3.93,
            "pressure": 1024,
            "sea_level": 1024,
            "grnd_level": 944,
            "humidity": 69,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 6
          },
          "wind": {
            "speed": 1.86,
            "deg": 287,
            "gust": 3.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-21 00:00:00"
        },
        {
          "dt": 1710990000,
          "main": {
            "temp": 3.01,
            "feels_like": 1.3,
            "temp_min": 3.01,
            "temp_max": 3.01,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 943,
            "humidity": 72,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 6
          },
          "wind": {
            "speed": 1.79,
            "deg": 293,
            "gust": 2.59
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-21 03:00:00"
        },
        {
          "dt": 1711000800,
          "main": {
            "temp": 4.51,
            "feels_like": 2.75,
            "temp_min": 4.51,
            "temp_max": 4.51,
            "pressure": 1023,
            "sea_level": 1023,
            "grnd_level": 943,
            "humidity": 65,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 8
          },
          "wind": {
            "speed": 2.05,
            "deg": 290,
            "gust": 3.6
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-21 06:00:00"
        },
        {
          "dt": 1711011600,
          "main": {
            "temp": 9.84,
            "feels_like": 8.17,
            "temp_min": 9.84,
            "temp_max": 9.84,
            "pressure": 1022,
            "sea_level": 1022,
            "grnd_level": 943,
            "humidity": 43,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 1
          },
          "wind": {
            "speed": 3.27,
            "deg": 296,
            "gust": 4.92
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-21 09:00:00"
        },
        {
          "dt": 1711022400,
          "main": {
            "temp": 12.68,
            "feels_like": 10.84,
            "temp_min": 12.68,
            "temp_max": 12.68,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 942,
            "humidity": 32,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 8
          },
          "wind": {
            "speed": 4.95,
            "deg": 299,
            "gust": 6.28
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-21 12:00:00"
        },
        {
          "dt": 1711033200,
          "main": {
            "temp": 11.59,
            "feels_like": 9.82,
            "temp_min": 11.59,
            "temp_max": 11.59,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 941,
            "humidity": 39,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 83
          },
          "wind": {
            "speed": 5.51,
            "deg": 290,
            "gust": 6.91
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-21 15:00:00"
        },
        {
          "dt": 1711044000,
          "main": {
            "temp": 8.26,
            "feels_like": 6.53,
            "temp_min": 8.26,
            "temp_max": 8.26,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 941,
            "humidity": 54,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 59
          },
          "wind": {
            "speed": 2.84,
            "deg": 287,
            "gust": 6.52
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-21 18:00:00"
        },
        {
          "dt": 1711054800,
          "main": {
            "temp": 6.7,
            "feels_like": 5.78,
            "temp_min": 6.7,
            "temp_max": 6.7,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 941,
            "humidity": 61,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 43
          },
          "wind": {
            "speed": 1.59,
            "deg": 283,
            "gust": 2.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-21 21:00:00"
        },
        {
          "dt": 1711065600,
          "main": {
            "temp": 5.54,
            "feels_like": 4,
            "temp_min": 5.54,
            "temp_max": 5.54,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 940,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03n"
            }
          ],
          "clouds": {
            "all": 49
          },
          "wind": {
            "speed": 2,
            "deg": 275,
            "gust": 3.3
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-22 00:00:00"
        },
        {
          "dt": 1711076400,
          "main": {
            "temp": 6.06,
            "feels_like": 3.74,
            "temp_min": 6.06,
            "temp_max": 6.06,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 939,
            "humidity": 75,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 3.05,
            "deg": 279,
            "gust": 5.96
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-22 03:00:00"
        },
        {
          "dt": 1711087200,
          "main": {
            "temp": 5.88,
            "feels_like": 4.25,
            "temp_min": 5.88,
            "temp_max": 5.88,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 939,
            "humidity": 90,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 2.15,
            "deg": 279,
            "gust": 2.98
          },
          "visibility": 10000,
          "pop": 0.56,
          "rain": {
            "3h": 0.64
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-22 06:00:00"
        },
        {
          "dt": 1711098000,
          "main": {
            "temp": 6.57,
            "feels_like": 6.57,
            "temp_min": 6.57,
            "temp_max": 6.57,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 939,
            "humidity": 79,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 0.85,
            "deg": 293,
            "gust": 1.6
          },
          "visibility": 6723,
          "pop": 1,
          "rain": {
            "3h": 1.15
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-22 09:00:00"
        },
        {
          "dt": 1711108800,
          "main": {
            "temp": 8.36,
            "feels_like": 8.36,
            "temp_min": 8.36,
            "temp_max": 8.36,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 937,
            "humidity": 66,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 0.77,
            "deg": 282,
            "gust": 1.7
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
            "3h": 0.43
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-22 12:00:00"
        },
        {
          "dt": 1711119600,
          "main": {
            "temp": 8.4,
            "feels_like": 5.93,
            "temp_min": 8.4,
            "temp_max": 8.4,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 937,
            "humidity": 60,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 500,
              "main": "Rain",
              "description": "light rain",
              "icon": "10d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 4.21,
            "deg": 60,
            "gust": 4.57
          },
          "visibility": 10000,
          "pop": 1,
          "rain": {
            "3h": 0.61
          },
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-22 15:00:00"
        },
        {
          "dt": 1711130400,
          "main": {
            "temp": 5.12,
            "feels_like": 2.79,
            "temp_min": 5.12,
            "temp_max": 5.12,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 939,
            "humidity": 75,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 803,
              "main": "Clouds",
              "description": "broken clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 69
          },
          "wind": {
            "speed": 2.81,
            "deg": 61,
            "gust": 5.47
          },
          "visibility": 10000,
          "pop": 0.59,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-22 18:00:00"
        },
        {
          "dt": 1711141200,
          "main": {
            "temp": 3.67,
            "feels_like": 2.01,
            "temp_min": 3.67,
            "temp_max": 3.67,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 940,
            "humidity": 77,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 6
          },
          "wind": {
            "speed": 1.83,
            "deg": 52,
            "gust": 3.55
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-22 21:00:00"
        },
        {
          "dt": 1711152000,
          "main": {
            "temp": 2.49,
            "feels_like": 2.49,
            "temp_min": 2.49,
            "temp_max": 2.49,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 940,
            "humidity": 77,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 5
          },
          "wind": {
            "speed": 1.12,
            "deg": 42,
            "gust": 2.24
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-23 00:00:00"
        },
        {
          "dt": 1711162800,
          "main": {
            "temp": 1.79,
            "feels_like": 1.79,
            "temp_min": 1.79,
            "temp_max": 1.79,
            "pressure": 1020,
            "sea_level": 1020,
            "grnd_level": 940,
            "humidity": 78,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 10
          },
          "wind": {
            "speed": 0.75,
            "deg": 32,
            "gust": 1.01
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-23 03:00:00"
        },
        {
          "dt": 1711173600,
          "main": {
            "temp": 3.38,
            "feels_like": 3.38,
            "temp_min": 3.38,
            "temp_max": 3.38,
            "pressure": 1021,
            "sea_level": 1021,
            "grnd_level": 941,
            "humidity": 70,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 9
          },
          "wind": {
            "speed": 0.6,
            "deg": 18,
            "gust": 1.29
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-23 06:00:00"
        },
        {
          "dt": 1711184400,
          "main": {
            "temp": 8.43,
            "feels_like": 6.52,
            "temp_min": 8.43,
            "temp_max": 8.43,
            "pressure": 1019,
            "sea_level": 1019,
            "grnd_level": 940,
            "humidity": 48,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "clouds": {
            "all": 11
          },
          "wind": {
            "speed": 3.17,
            "deg": 67,
            "gust": 4.69
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-23 09:00:00"
        },
        {
          "dt": 1711195200,
          "main": {
            "temp": 10.48,
            "feels_like": 8.68,
            "temp_min": 10.48,
            "temp_max": 10.48,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 939,
            "humidity": 42,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 801,
              "main": "Clouds",
              "description": "few clouds",
              "icon": "02d"
            }
          ],
          "clouds": {
            "all": 14
          },
          "wind": {
            "speed": 4.17,
            "deg": 57,
            "gust": 4.85
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-23 12:00:00"
        },
        {
          "dt": 1711206000,
          "main": {
            "temp": 9.63,
            "feels_like": 7.56,
            "temp_min": 9.63,
            "temp_max": 9.63,
            "pressure": 1016,
            "sea_level": 1016,
            "grnd_level": 938,
            "humidity": 45,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 8
          },
          "wind": {
            "speed": 3.97,
            "deg": 71,
            "gust": 4.34
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-23 15:00:00"
        },
        {
          "dt": 1711216800,
          "main": {
            "temp": 6.11,
            "feels_like": 4.29,
            "temp_min": 6.11,
            "temp_max": 6.11,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 939,
            "humidity": 59,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 4
          },
          "wind": {
            "speed": 2.41,
            "deg": 82,
            "gust": 3.67
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-23 18:00:00"
        },
        {
          "dt": 1711227600,
          "main": {
            "temp": 4.61,
            "feels_like": 3.18,
            "temp_min": 4.61,
            "temp_max": 4.61,
            "pressure": 1018,
            "sea_level": 1018,
            "grnd_level": 939,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 1.76,
            "deg": 89,
            "gust": 2.76
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-23 21:00:00"
        },
        {
          "dt": 1711238400,
          "main": {
            "temp": 3.57,
            "feels_like": 3.57,
            "temp_min": 3.57,
            "temp_max": 3.57,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 938,
            "humidity": 71,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 0.85,
            "deg": 100,
            "gust": 0.89
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-24 00:00:00"
        },
        {
          "dt": 1711249200,
          "main": {
            "temp": 2.61,
            "feels_like": 2.61,
            "temp_min": 2.61,
            "temp_max": 2.61,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 937,
            "humidity": 75,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01n"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 0.55,
            "deg": 98,
            "gust": 0.58
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-24 03:00:00"
        },
        {
          "dt": 1711260000,
          "main": {
            "temp": 4.44,
            "feels_like": 4.44,
            "temp_min": 4.44,
            "temp_max": 4.44,
            "pressure": 1017,
            "sea_level": 1017,
            "grnd_level": 937,
            "humidity": 67,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 0.24,
            "deg": 330,
            "gust": 0.39
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-24 06:00:00"
        },
        {
          "dt": 1711270800,
          "main": {
            "temp": 10.07,
            "feels_like": 8.31,
            "temp_min": 10.07,
            "temp_max": 10.07,
            "pressure": 1014,
            "sea_level": 1014,
            "grnd_level": 936,
            "humidity": 45,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 800,
              "main": "Clear",
              "description": "clear sky",
              "icon": "01d"
            }
          ],
          "clouds": {
            "all": 0
          },
          "wind": {
            "speed": 0.75,
            "deg": 73,
            "gust": 0.88
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-24 09:00:00"
        },
        {
          "dt": 1711281600,
          "main": {
            "temp": 13.66,
            "feels_like": 11.92,
            "temp_min": 13.66,
            "temp_max": 13.66,
            "pressure": 1012,
            "sea_level": 1012,
            "grnd_level": 935,
            "humidity": 32,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 802,
              "main": "Clouds",
              "description": "scattered clouds",
              "icon": "03d"
            }
          ],
          "clouds": {
            "all": 32
          },
          "wind": {
            "speed": 1.24,
            "deg": 340,
            "gust": 1.47
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-24 12:00:00"
        },
        {
          "dt": 1711292400,
          "main": {
            "temp": 13.85,
            "feels_like": 12.13,
            "temp_min": 13.85,
            "temp_max": 13.85,
            "pressure": 1010,
            "sea_level": 1010,
            "grnd_level": 933,
            "humidity": 32,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04d"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 0.99,
            "deg": 11,
            "gust": 1.1
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "d"
          },
          "dt_txt": "2024-03-24 15:00:00"
        },
        {
          "dt": 1711303200,
          "main": {
            "temp": 10.84,
            "feels_like": 9.15,
            "temp_min": 10.84,
            "temp_max": 10.84,
            "pressure": 1011,
            "sea_level": 1011,
            "grnd_level": 934,
            "humidity": 45,
            "temp_kf": 0
          },
          "weather": [
            {
              "id": 804,
              "main": "Clouds",
              "description": "overcast clouds",
              "icon": "04n"
            }
          ],
          "clouds": {
            "all": 100
          },
          "wind": {
            "speed": 1.55,
            "deg": 97,
            "gust": 1.71
          },
          "visibility": 10000,
          "pop": 0,
          "sys": {
            "pod": "n"
          },
          "dt_txt": "2024-03-24 18:00:00"
        }
      ],
      "city": {
        "id": 727011,
        "name": "Sofia",
        "coord": {
          "lat": 42.7295,
          "lon": 23.298
        },
        "country": "BG",
        "population": 1152556,
        "timezone": 7200,
        "sunrise": 1710822689,
        "sunset": 1710866250
      }
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch search options', async () => {
    const { result } = renderHook(() => useForecast());
    const userInput = 'Sofia';

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    await act(async () => {
      result.current.getSearchOptions(userInput);
    });

    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_WEATHER_BASE_API_URL}/geo/1.0/direct?q=${userInput.trim()}&limit=5&lang=en&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    expect(result.current.options).toEqual(mockResponse.data);
  });

  it('should fetch forecast by coordinates', async () => {
    const { result } = renderHook(() => useForecast());
    const latitude = 42.6977;
    const longitude = 23.3217;

    (axios.get as jest.Mock).mockResolvedValue(mockResponse);

    await act(async () => {
      result.current.getForecastByCoordinates(latitude, longitude);
    });

    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.REACT_APP_WEATHER_BASE_API_URL}/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=en&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    expect(result.current.forecast).toEqual(mockResponse.data);
  });

  it('should handle error while fetching search options', async () => {
    const { result } = renderHook(() => useForecast());

    jest.spyOn(console, 'error').mockImplementation(() => { });

    (axios.get as jest.Mock).mockRejectedValue(new Error('Error fetching search options'));

    await act(async () => {
      result.current.getSearchOptions('12345');
    });

    expect(console.error).toHaveBeenCalled();
  });

  it('should handle error while fetching forecast by coordinates', async () => {
    const { result } = renderHook(() => useForecast());

    (axios.get as jest.Mock).mockRejectedValue(new Error('Geolocation is not supported by this browser.'));

    await act(async () => {
      result.current.getForecastByCoordinates(0, 0);
    });

    jest.spyOn(console, 'error').mockImplementation(() => { });

    expect(console.error).toHaveBeenCalled();
  });
});
