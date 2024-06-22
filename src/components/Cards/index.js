import { TiWeatherCloudy } from "react-icons/ti";
import { useState, useEffect } from "react";
import { IoTimeOutline } from "react-icons/io5";
import CardInfo from "../CardInfo";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import BroadCast from "../Broadcast";
import LinechartCom from "../Linechart";
import PiechartComp from "../Piechart";
import "./indx.css";

const Cards = (props) => {
  const [curentTime, updateTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalVar = setInterval(() => {
      const date = new Date().toLocaleTimeString();

      updateTime(date);
    }, 1000);

    return () => {
      clearInterval(intervalVar);
    };
  }, []);

  const { backndData } = props;
  const { cityName, description, icon, sunrise, sunset } = backndData;

  function formatDate(date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return date.toLocaleString("en-GB", options);
  }

  const sunriseDate = new Date(sunrise * 1000); // Multiply by 1000 to convert seconds to milliseconds
  const sunsetDate = new Date(sunset * 1000);

  return (
    <div className="chidDiv">
      <div className="mainSubChild">
        <div className="cityRelated">
          <div className="cityNameEtc">
            <div className="weatherLogo">
              <div className="Logo">
                <img
                  src={`https://openweathermap.org/img/wn/${icon}.png`}
                  alt="imgLogo"
                />
                <h1 className="cityName">{cityName}</h1>
              </div>

              <div className="weatherDesc">
                <span>
                  <TiWeatherCloudy size={40} />
                </span>
                <p>
                  <span>Weather</span>: <span>{description} </span>
                </p>
              </div>
            </div>

            <div>
              <p>
                <WiSunrise size={30} />
                <span className="fWeights">Sunrise:</span>{" "}
                <span className="fSize">{formatDate(sunriseDate)} </span>
              </p>

              <p>
                <TbSunset2 size={30} />
                <span className="fWeights">Sunset :</span>{" "}
                <span className="fSize">{formatDate(sunsetDate)}</span>
              </p>
            </div>

            <div className="timeDiv">
              <IoTimeOutline size={30} />
              <h2>
                {new Date().toLocaleDateString("default", { weekday: "long" })},{" "}
                {new Date().getDate()}{" "}
                {new Date().toLocaleString("default", { month: "long" })},{" "}
                {new Date().getFullYear()} {curentTime}
              </h2>
            </div>
          </div>

          {/* <div className="titleInfo">
            <h1>City weather info and Broadcast</h1>
          </div> */}

          <div className="cityInfo">
            <div className="dashbordDiv">
              <CardInfo weatherData={backndData} />
            </div>
            <div className="broadCastDiv">
              <BroadCast cityName={cityName} />
            </div>
          </div>

          <div className="chartDiv">
            <h1>Weather Chart for {cityName}</h1>
            <div className="allCharts">
              <LinechartCom forChart={backndData} />
              <PiechartComp forPieChart={backndData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
