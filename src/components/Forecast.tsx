import { css } from "@emotion/css";
import { mdiCloudPercent, mdiEye, mdiUmbrella, mdiWeatherDust, mdiWeatherSunset, mdiWeatherSunsetDown, mdiWeatherSunsetUp, mdiWeatherWindy } from "@mdi/js";
import { Grid } from "@mui/material";
import CustomIcon from "../shared/CustomIcon";
import Degree from "../shared/Degree";
import Highlight from "../shared/Highlight";
import { ForecastResponse } from "../types/types";
import { calculateHumidity, calculatePop, calculateVisibility, calculateWindDirection, convertUnixTimestamp, getWeekDays, groupByDay } from "../utils/helpers";
import DailyForecastItem from "./DailyForecastItem";

interface ForecastProps {
  data: ForecastResponse | null;
}
const degreeClass = css({
  fontSize: '4rem',
  fontWeight: 900,
});

const titleClass = css({
  fontSize: '1.5rem',
  fontWeight: 900,
  color: 'lightcoral',
});

const spanClass = css({
  fontSize: '2rem',
  fontWeight: 300,
  padding: 12,
});

const pClass = css({
  fontSize: '0.875rem'
});

const Forecast = ({ data }: ForecastProps) => {

  if (!data) return null;

  const city = data.city;
  const hourlyForecast = data.list.slice(0, 7);
  const todayForecast = data.list[0];
  const weekForecast = groupByDay(data);
  const weekDays = getWeekDays();

  return (
    <Grid container spacing={4}>

      {/* CURRENT WEATHER */}
      <Grid item md={4}>
        <section style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
          <h2 className={titleClass}>Current Weather</h2>
          <span className={spanClass}>
            {city.name} , {city.country}
          </span>
          <img
            alt={`weather-icon-${todayForecast.weather[0].description}`}
            src={`http://openweathermap.org/img/wn/${todayForecast.weather[0].icon}@2x.png`}
          />
          <h1 className={degreeClass}>
            <Degree temp={Math.round(todayForecast.main.temp)} />
          </h1>
          <p className={pClass}>
            {todayForecast.weather[0].main} ({todayForecast.weather[0].description})
          </p>
          <p className={pClass}>
            <span className={spanClass}>
              H:{' '} <Degree temp={Math.ceil(todayForecast.main.temp_max)} />
            </span>
            <span className={spanClass}>
              L:{' '} <Degree temp={Math.floor(todayForecast.main.temp_min)} />
            </span>
          </p>
        </section>
      </Grid>

      {/* WEAKLY FORECAST */}
      <Grid item md={8}>
        <h2 className={titleClass}>Weakly Forecast</h2>
        {weekForecast.map((item, idx) => (
          <DailyForecastItem key={idx} item={item} day={weekDays[idx]} />
        ))}
      </Grid>

      {/* HOURLY FORECAST */}
      <Grid item md={4}>
        <section style={{ textAlign: 'center' }}>
          <h2 className={titleClass}>Hourly Forecast</h2>
          {hourlyForecast.map((item, i) => (
            <div key={i} style={{ display: 'inline-block', textAlign: 'center', flexShrink: 0 }}>
              <p style={{ fontSize: '0.875rem' }}>
                {i === 0 ? 'Now' : convertUnixTimestamp(item.dt)}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p style={{ fontSize: '0.875rem', fontWeight: 'bold' }}>
                <Degree temp={Math.round(item.main.temp)} />
              </p>
            </div>
          ))}
        </section>
      </Grid>

      {/* TODAY HIGHLIGHTS */}
      <Grid item md={8}>
        <h2 className={titleClass}>Today's Highlights</h2>
        <section style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <Highlight
            icon={mdiWeatherWindy}
            title={"Wind Status"}
            line1={`${todayForecast.wind.speed} km/h`}
            description={calculateWindDirection(todayForecast.wind.deg)}
          />

          <Highlight
            icon={mdiWeatherSunset}
            title={"Sunrise & Sunset"}
            line1={
              <>
                <CustomIcon path={mdiWeatherSunsetUp} />
                {convertUnixTimestamp(city.sunrise)} AM
              </>
            }
            line2={
              <>
                <CustomIcon path={mdiWeatherSunsetDown} />
                {convertUnixTimestamp(city.sunset)} PM
              </>
            }
          />

          <Highlight
            icon={mdiCloudPercent}
            title={"Humidity"}
            line1={`${todayForecast.main.humidity} %`}
            description={calculateHumidity(todayForecast.main.humidity)}
          />

          <Highlight
            icon={mdiUmbrella}
            title={"Precipitation"}
            line1={`${Math.round(todayForecast.pop * 100)} %`}
            description={calculatePop(todayForecast.pop)}
          />

          <Highlight
            icon={mdiWeatherDust}
            title={"Pressure"}
            line1={`${todayForecast.main.pressure} hPa`}
            description={` ${Math.round(todayForecast.main.pressure) < 1013 ? 'Lower' : 'Higher'
              } than standard`}
          />

          <Highlight
            icon={mdiEye}
            title={"Visibility"}
            line1={`${(todayForecast.visibility / 1000).toFixed()} km`}
            description={calculateVisibility(todayForecast.visibility)}
          />
        </section>
      </Grid>

    </Grid>
  )
}

export default Forecast