import React from "react";
import Text from "../../atoms/Text/text.component";
import "./PendingOrdersCard.css";

const PendingOrderCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <Text variant="medium">Pending Orders</Text>
        </div>

        <div className="card-value">
          <Text variant="largeMedium">174</Text>
        </div>

        <div className="card-subtitle">
          <Text variant="small">28% increase from last month</Text>
        </div>
      </div>
    </div>
  );
};

export default PendingOrderCard;
