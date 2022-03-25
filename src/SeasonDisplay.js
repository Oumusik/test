import React from 'react';
import style from './style.css'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'lato' : 'zima';
  } else {
    return lat > 0 ? 'zima' : 'lato';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const text = season === 'zima' ? 'Brr, ale zimno' : 'Lecimy na plażę';
  const icon = season === 'zima' ? 'snowflake':'sun';

  return (
      <div className={`season ${season}`}>
          <i className={`massive icon-left ${icon} icon`}></i>
          <h1>{text}</h1>
          <i className={`massive icon-right ${icon} icon`}></i>
      </div>
  );
};

export default SeasonDisplay;