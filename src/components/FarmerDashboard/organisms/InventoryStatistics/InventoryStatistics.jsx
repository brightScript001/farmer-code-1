// InventoryStatistics.js
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  StatisticsContainer,
  Title,
  ChartContainer,
  Legend,
  ChartDescription,
  LineChartContainer,
} from "./statisticsStyledComponents";
import { doughnutData, doughnutOptions } from "./statisticsData";
import { lineData, lineOptions } from "./statisticsData";

const InventoryStatistics = () => {
  return (
    <StatisticsContainer>
      <Title>Inventory Statistics</Title>
      <ChartContainer>
        <h3>Planting and Harvesting</h3>
        <Doughnut
          data={doughnutData}
          options={doughnutOptions}
          width={150}
          height={150}
        />
        <Legend>
          <div>
            <span style={{ backgroundColor: "#FFCE56" }}></span> Planting
          </div>
          <div>
            <span style={{ backgroundColor: "#36A2EB" }}></span> Harvesting
          </div>
        </Legend>
        <ChartDescription>
          Farm yield is 67%. This is a 14% decrease from last planting season.
        </ChartDescription>
      </ChartContainer>
      <LineChartContainer>
        <h3>Farm Supplies Usage</h3>
        <Line data={lineData} options={lineOptions} />
      </LineChartContainer>
    </StatisticsContainer>
  );
};

export default InventoryStatistics;
