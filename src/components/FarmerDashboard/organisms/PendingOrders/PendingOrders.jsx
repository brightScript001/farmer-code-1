import React from "react";
import PendingOrdersList from "./PendingOrdersList";
import Text from "../../atoms/Text/text.component";

const PendingOrders = ({ orders }) => {
  return (
    <div className="pending-orders">
      <h2 className="heading">Pending Orders</h2>
      <PendingOrdersList orders={orders} />
      <Text className="total-orders" size={1.2} color="#666">
        {`Total: ${orders.length} orders`}
      </Text>
    </div>
  );
};

export default PendingOrders;
