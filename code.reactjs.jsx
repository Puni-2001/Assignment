import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px;
`;

const Card = styled.div`
  width: 300px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  color: #333;
`;

const Content = styled.p`
  color: #666;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card>
        <Title>Users</Title>
        <Content>Active Users: 1500</Content>
      </Card>
      <Card>
        <Title>Revenue</Title>
        <Content>Total Revenue: $100,000</Content>
      </Card>
      <Card>
        <Title>Orders</Title>
        <Content>Today's Orders: 50</Content>
      </Card>
      {/* Add more cards as needed */}
    </DashboardContainer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Dashboard App</h1>
      <Dashboard />
    </div>
  );
};

export default App;
