import { css } from '@emotion/css';
import { mdiCloudPercent, mdiThermometer, mdiUmbrella, mdiWeatherWindy } from '@mdi/js';
import CustomIcon from '../shared/CustomIcon';
import Degree from '../shared/Degree';
import { ForecastEntry } from '../types/types';

interface Props {
  item: ForecastEntry;
  day: string;
}

const containerClass = css({
  backgroundColor: 'white',
  borderRadius: 8,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  padding: '4px 0',
  margin: 4,
  // width: '100%',
})

const titleClass = css({
  // background: 'blue',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontWeight: '600',
  lineHeight: 1,
  padding: 4,
  margin: 4,
})

const descriptionClass = css({
  // background: 'red',
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'left',
})

const itemClass = css({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
})

const DailyForecastItem = ({ item, day }: Props) => {
  return (
    <div className={containerClass}>

      <div className={titleClass}>
        <div className={itemClass}>
          {day}
        </div>
        <div className={itemClass}>
          <CustomIcon path={mdiThermometer} />
          <Degree temp={Math.round(item.main.temp)} />
        </div>

        <div className={itemClass}>
          <CustomIcon path={mdiWeatherWindy} />
          <span style={{ paddingLeft: 4 }}>
            {`${item.wind.speed} km/h`}
          </span>
        </div>
      </div>

      <div className={descriptionClass}>
        <div className={itemClass}>
          <img
            alt="weather"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
          />
          <span style={{ paddingLeft: 4, }}>
            {item.weather[0].description}
          </span>
        </div>

        <div className={itemClass}>
          <CustomIcon path={mdiCloudPercent} />
          <span style={{ paddingLeft: 4, }}>
            {`${item.main.humidity} %`}
          </span>
        </div>

        <div className={itemClass}>
          <CustomIcon path={mdiUmbrella} />
          <span style={{ paddingLeft: 4, }}>
            {`${Math.round(item.pop * 100)} %`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DailyForecastItem;