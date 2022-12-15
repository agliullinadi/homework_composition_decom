/* 
  погода (картинка с типом погоды и температура)
*/

function Weather({ forecast }) {
  return (
    <div className="weather">
      <img src={forecast.icon} className="weather_img" alt="..." />
      <div className="weather__temp">{forecast.temp_morning}°</div>
      <div className="weather__forecast">
        <span>Днём {forecast.temp_afternoon},</span>
        <span>вечером {forecast.temp_evening}</span>
      </div>
    </div>
  );
}

Weather.defaultProps = {
  forecast: {},
};

export default Weather;


