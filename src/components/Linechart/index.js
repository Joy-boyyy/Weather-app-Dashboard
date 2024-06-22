import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./index.css";

const LinechartCom = (props) => {
  const { forChart } = props;
  const { temp, tempMin, tempMax, pressure, windSpeed, humidity } = forChart;

  const data = [
    { name: "Temperature", value: temp },
    { name: "Min Temperature", value: tempMin },
    { name: "Max Temperature", value: tempMax },
    { name: "Pressure", value: pressure },
    { name: "Humidity", value: humidity },
    { name: "Wind Speed", value: windSpeed },
  ];

  return (
    <div className="lineChartDiv">
      <LineChart
      className="lineeCh"
        width={500}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>



      {/* // line chart for small screen size */}

      <LineChart
      className="lineChartForSmallScree"
        width={300}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>


    </div>
  );
};

export default LinechartCom;
