// MarketInsights.js
import React from "react";
import { features } from "./data/features";
import { Container, Header, Item, Change } from "./styledComponents";

const MarketInsights = () => {
  return (
    <Container>
      <Header>Market Insights</Header>
      {features.map((feature, index) => (
        <Item key={index} className={feature.status.toLowerCase()}>
          <span>Demand for {feature.name}</span>
          <Change>
            ({feature.status} {feature.change}%)
          </Change>
        </Item>
      ))}
    </Container>
  );
};

export default MarketInsights;
