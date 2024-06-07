import React from "react";
import DashboardHeader from "../../organisms/DashboardHeader/DashboardHeader";
import OrderBoard from "../../organisms/OrderBoard/OrderBoard";
import PendingOrderList from "../../organisms/PendingOrders/PendingOrderList";
import MarketInsights from "../../organisms/MarketInsightsList/MarketInsights";
import Sidebar from "../../organisms/Sidebar/Sidebar";
import InventoryStatistics from "../../organisms/InventoryStatistics/InventoryStatistics";

const Dashboard = () => {
  return (
    <div className="farmerDashboard">
      <DashboardHeader />
      <OrderBoard />
      <Sidebar />
      <PendingOrderList />
      <MarketInsights />
      <InventoryStatistics />
    </div>
  );
};

export default Dashboard;
