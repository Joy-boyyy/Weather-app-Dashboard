import { useEffect, useState } from "react";
import "./index.css";

const BroadCast = ({ cityName }) => {
  const [arrObj, broadcastFun] = useState([]);

  useEffect(() => {
    const fetchWeatherFun = async () => {
      const fetchVar = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=b7e1f3c9367a6ba046f296a182d6d9a8`
      );
      if (fetchVar.ok === true) {
        const jsonConver = await fetchVar.json();

        const broadCastArr = jsonConver.list.map((jsonCon) => ({
          description: jsonCon.weather[0].description,
          icon: jsonCon.weather[0].icon,
          weatherInfo: jsonCon.weather[0].main,
          dt: jsonCon.dt,

          temp: jsonCon.main.temp,

          windSpeed: jsonCon.wind.speed,

          myCityName: cityName,
          date: jsonCon.dt_txt,
        }));

        broadcastFun(broadCastArr);
      }
    };

    fetchWeatherFun();
  }, [cityName]);

  return (
    <div className="allBroadcast">
      <ul className="ulCard">
        {arrObj.map((mapProp) => (
          <li key={mapProp.dt} className="broadcastLi">
            <img
              src={`http://openweathermap.org/img/wn/${mapProp.icon}.png`}
              alt="weatherLogo"
              className="pngWidth"
            />
            <p>
              <span className="changeW">City: </span> {mapProp.myCityName}
            </p>
            <p>
              <span className="changeW">Date:</span>{" "}
              {new Date(mapProp.date).toLocaleDateString()}
            </p>
            <p>
              <span className="changeW"> Weather: </span> {mapProp.description}
            </p>
            <p>
              <span className="changeW"> Weather:</span>
              {mapProp.weatherInfo}
            </p>
            <p>
              {" "}
              <span className="changeW">Temperature: </span>{" "}
              {(mapProp.temp - 273.15).toFixed(2)}°C
            </p>
            <p>
              {" "}
              <span className="changeW">Wind Speed: </span> {mapProp.windSpeed}
              m/s
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default BroadCast;
