// statisticsStyledComponents.js
import styled from "styled-components";

export const StatisticsContainer = styled.div`
  width: 19.5625rem;
  height: 100vh;
  padding: 1rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.5rem;
  background-color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Legend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  div {
    display: flex;
    align-items: center;
    margin-right: 1rem;

    span {
      width: 0.75rem;
      height: 0.75rem;
      border-radius: 50%;
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
`;

export const ChartDescription = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 1rem;
`;

export const LineChartContainer = styled.div`
  width: 100%;
  height: 15rem;
`;
