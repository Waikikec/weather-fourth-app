import { ForecastEntry } from "../types/types";

export function convertUnixTimestamp(timestamp: number): string {

  // Multiply by 1000 to convert to milliseconds
  const date = new Date(timestamp * 1000);

  // Get the individual components of the date
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes();

  // Format the time as HH:MM:SS
  const formattedTime = hours + ':' + minutes.substr(-2);
  return formattedTime;
}

export function calculateHumidity(humidity: number): string {
  if (humidity >= 30 && humidity <= 60) {
    return "Normal humidity level";
  } else {
    return "Abnormal humidity level";
  }
}

export function calculateWindDirection(deg: number): string {
  const directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"];
  // Calculate the index in the directions array
  const index = Math.round(deg / 45) % 8;
  return directions[index];
}

export const calculatePop = (value: number): string => {
  if (value <= 0.33) return 'Low probability';
  if (value > 0.33 && value <= 0.66) return 'Moderate probability';

  return 'High probability';
}

export const calculateVisibility = (number: number): string => {
  if (number <= 50) return 'Dangerously foggy'
  if (number > 50 && number <= 500) return 'Expect heavy fog'
  if (number > 500 && number <= 2000) return 'Expect some fog'
  if (number > 2000 && number <= 9000) return 'Expect some haze'

  return 'Very clear day'
}


export function groupByDay(data: { list: ForecastEntry[] }): ForecastEntry[] {

  const groupData: { [key: number]: ForecastEntry } = {};

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000).getDate();
    if (!groupData[date]) {
      groupData[date] = item;
    }
  })
  return Object.values(groupData)
}

export function getWeekDays(): string[] {
  const dayInAWeek = new Date().getDay();
  const days = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  return days;
}

const weekDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];