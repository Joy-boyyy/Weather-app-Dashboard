import { useEffect, useState } from "react";
import Cards from "../Cards";

import { ColorRing } from "react-loader-spinner";
import Search from "../Search";
import "./index.css";

const responseForFunction = {
  err: "onError",
  load: "onLoading",
  success: "onSuccess",
  initial: "nothing",
};

const Dashboard = () => {
  const [responseHappen, dataResultFun] = useState(responseForFunction.initial);
  const [backndData, backndDataFun] = useState({});
  const [dataPreset, dataSetFun] = useState("delhi");

  useEffect(() => {
    const fetchWeatherFun = async () => {
      dataResultFun(responseForFunction.load);

      const fetchData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${dataPreset}&appid=b7e1f3c9367a6ba046f296a182d6d9a8`
      );
      if (fetchData.ok === true) {
        const jsonConverted = await fetchData.json();

        const dataDestructure = {
          description: jsonConverted.weather[0].description,
          icon: jsonConverted.weather[0].icon,
          weatherInfo: jsonConverted.weather[0].main,

          temp: jsonConverted.main.temp,
          tempMin: jsonConverted.main.temp_min,
          tempMax: jsonConverted.main.temp_max,
          pressure: jsonConverted.main.pressure,
          windSpeed: jsonConverted.wind.speed,
          sunrise: jsonConverted.sys.sunrise,
          sunset: jsonConverted.sys.sunset,
          humidity: jsonConverted.main.humidity,
          cityName: jsonConverted.name,
        };

        backndDataFun(dataDestructure);

        dataResultFun(responseForFunction.success);
      } else {
        dataResultFun(responseForFunction.err);
      }
    };

    fetchWeatherFun();
  }, [dataPreset]);

  const successFun = () => {
    return <Cards backndData={backndData} />;
  };

  const errFun = () => {
    return (
      <div className="errDiv">
        <img
          className="notFoundImg"
          src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147738999.jpg?w=740&t=st=1718969826~exp=1718970426~hmac=b41f718d5380e450d91a8f2ee76a465ed610a8ff1fd5e89714ec6ae5dfd183f0"
          alt="notFound"
        />
        <h1>Please enter Valid City Name</h1>
      </div>
    );
  };

  const loadingFun = () => {
    return (
      <div>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  };

  const responseCheck = () => {
    switch (responseHappen) {
      case responseForFunction.success:
        return successFun();

      case responseForFunction.err:
        return errFun();

      case responseForFunction.load:
        return loadingFun();

      default:
        return null;
    }
  };

  const fromSearch = (myTxt) => {
    dataSetFun(myTxt);
  };

  return (
    <div className="parentDiv">
      <Search fromSearch={fromSearch} />

      {responseCheck()}
    </div>
  );
};

export default Dashboard;
