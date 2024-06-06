import React from "react";
import Text from "../../atoms/Text/text.component";
import "./YourRevenue.css";

const YourRevenueCard = () => {
  return (
    <div className="RevenueCard">
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

export default YourRevenueCard;
