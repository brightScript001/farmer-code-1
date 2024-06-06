import React from "react";
import Text from "../../atoms/Text/text.component";
import "./SettledOrders.css";

const SettledOrderCard = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-header">
          <Text variant="medium">Settled Orders</Text>
        </div>

        <div className="card-value">
          <Text variant="largeMedium">882</Text>
        </div>

        <div className="card-subtitle">
          <Text variant="small">82% customer satisfaction</Text>
        </div>
      </div>
    </div>
  );
};

export default SettledOrderCard;
