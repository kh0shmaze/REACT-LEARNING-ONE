import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointVlaues = props.dataPoints.map((dataPoint) => dataPoint.value); // convert object to number
  const totalMaximum = Math.max(...dataPointVlaues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.lable}
          value={dataPoint.value}
          maxValue={totalMaximum}
          lable={dataPoint.lable}
        />
      ))}
    </div>
  );
};

export default Chart;
