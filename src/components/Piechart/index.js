import { PieChart, Pie, Tooltip, Cell } from "recharts";

const PiechartComp = (props) => {
  const { forPieChart } = props;
  const { temp, tempMin, tempMax, pressure, windSpeed, humidity } = forPieChart;

  const data = [
    { name: "Temperature", value: temp },
    { name: "Min Temperature", value: tempMin },
    { name: "Max Temperature", value: tempMax },
    { name: "Pressure", value: pressure },
    { name: "Humidity", value: humidity },
    { name: "Wind Speed", value: windSpeed },
  ];

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF6384",
    "#36A2EB",
  ];

  return (
    <div className="pieChartDiv">

{/* for big screen */}

      <PieChart width={500} height={500}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>




    </div>
  );
};

export default PiechartComp;
