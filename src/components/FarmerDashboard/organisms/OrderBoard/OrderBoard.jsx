import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 1.25rem;
  width: 20.8125rem;
  height: 10.8125rem;
  box-shadow: 0 4px 7px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  margin-bottom: 0.625rem;
`;

const Value = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.625rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: #cecece;
`;

const RevenueCard = styled(Card)`
  width: 24.4375rem;
  height: 10.8125rem;
  background-color: rgba(91, 170, 96, 1);
  color: white;
`;

const Dashboard = () => {
  return (
    <Container>
      <Card>
        <Title>Pending Orders</Title>
        <Value>174</Value>
        <Description>28% increase from last month</Description>
      </Card>
      <Card>
        <Title>Settled Orders</Title>
        <Value>882</Value>
        <Description>82% customer satisfaction</Description>
      </Card>
      <RevenueCard>
        <Title>Your revenue</Title>
        <Value>N4,331,912</Value>
        <Description>17% increase</Description>
      </RevenueCard>
    </Container>
  );
};

export default Dashboard;
