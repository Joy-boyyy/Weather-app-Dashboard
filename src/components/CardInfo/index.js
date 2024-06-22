import { FaTemperatureArrowDown } from "react-icons/fa6";
import { FaTemperatureArrowUp } from "react-icons/fa6";
import { FaTachometerAlt } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import "./index.css";

const CardInfo = (props) => {
  const { weatherData } = props;

  const { temp, tempMin, tempMax, pressure, humidity, windSpeed } = weatherData;

  function convertTemperature(kelvin) {
    const celsius = kelvin - 273.15;
    const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;

    return {
      celsius: celsius.toFixed(2), // rounding to 2 decimal places
      fahrenheit: fahrenheit.toFixed(2), // rounding to 2 decimal places
    };
  }

  function convertPressure(hPa) {
    const atm = hPa * 0.000986923;
    const psi = hPa * 0.0145038;
    const inHg = hPa * 0.02953;

    return {
      atm: atm.toFixed(4), // rounding to 4 decimal places
      psi: psi.toFixed(4), // rounding to 4 decimal places
      inHg: inHg.toFixed(4), // rounding to 4 decimal places
    };
  }

  function mpsToKmph(mps) {
    return mps * 3.6;
  }
  function mpsToMph(mps) {
    return mps * 2.237;
  }

  function mpsToKnots(mps) {
    return mps * 1.944;
  }

  const temprature = convertTemperature(temp);
  const minTemp = convertTemperature(tempMin);
  const maxTemp = convertTemperature(tempMax);
  const convertedPressure = convertPressure(pressure);

  return (
    <div className="cardInfoDiv">
      <ul>
        <li>
          <span className="fWeight">Temprature </span>

          <span>
            <FaTemperatureHigh />
            {temprature.celsius}°C
          </span>

          <span>
            <FaTemperatureHigh />
            {temprature.fahrenheit}°F
          </span>
        </li>
        <li>
          {" "}
          <span className="fWeight">Min-Temprature </span>:
          <span>
            <FaTemperatureArrowDown />
            {minTemp.celsius}°C
          </span>
          <span>
            <FaTemperatureArrowDown />
            {minTemp.fahrenheit}°F
          </span>
        </li>
        <li>
          {" "}
          <span className="fWeight">Max-Temprature </span>:
          <span>
            <FaTemperatureArrowUp />
            {maxTemp.celsius}°C
          </span>
          <span>
            <FaTemperatureArrowUp />
            {maxTemp.fahrenheit}°F
          </span>
        </li>

        <li>
          <span className="fWeight"> Pressure: </span>

          <span>
            <FaTachometerAlt />
            {convertedPressure.atm} atm
          </span>

          <span>
            <FaTachometerAlt />
            {convertedPressure.psi} psi
          </span>

          <span>
            <FaTachometerAlt />
            {convertedPressure.inHg} inHg
          </span>
        </li>

        <li>
          <span className="fWeight">
            Humidity: <WiHumidity />{" "}
          </span>
          {humidity}
        </li>

        <li>
          <span className="fWeight">
            Wind speed in km/h:
            <MdAir />
          </span>
          {mpsToKmph(windSpeed)}
          <br />
          <br />

          <span className="fWeight">
            Wind speed in mph:
            <MdAir />
          </span>
          {mpsToMph(windSpeed)}
          <br />
          <br />

          <span className="fWeight">
            Wind speed in knots:
            <MdAir />
          </span>
          {mpsToKnots(windSpeed)}
        </li>
      </ul>
    </div>
  );
};

export default CardInfo;
