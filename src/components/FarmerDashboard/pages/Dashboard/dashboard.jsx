import React from "react";
import DashboardHeader from "../../organisms/DashboardHeader/DashboardHeader";
import PendingOrderCard from "../../organisms/PendingOrdersSection/PendingOrdersCard";
import SettledOrderCard from "../../organisms/SettledOrdersSection/SettledOrders";
import YourRevenueCard from "../../organisms/YourRevenueSection/YourRevenue";

const Dashboard = () => {
  return (
    <div className="farmerDashboard">
      <DashboardHeader />
      <PendingOrderCard />
      <SettledOrderCard />
      <YourRevenueCard />
    </div>
  );
};

export default Dashboard;
