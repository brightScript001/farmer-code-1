import React from "react";
import styled from "styled-components";
import PendingOrderItems from "./PendingOrderItem";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../atoms/Button/button.component";

const PendingOrderListContainer = styled.div`
  width: 27.8125rem;
  height: 37.625rem;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
  font-size: 1rem;
`;

const ArrowIcon = styled.span`
  font-size: 1rem;
`;

const PendingOrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const Fulname = styled.div`
  font-size: 0.875rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductsAndDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Products = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 60%;
  font-size: 0.75rem;
  color: #888;
`;

const DateAndButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Date = styled.div`
  color: #888;
  font-size: 0.75rem;
  margin-right: 1rem;
`;

const ViewButton = styled(Button)`
  min-width: 5.25rem;
`;

const PendingOrderList = () => {
  return (
    <PendingOrderListContainer>
      <Header>
        Pending Orders
        <ArrowIcon>&#9654;</ArrowIcon>
      </Header>
      {PendingOrderItems.map((item) => (
        <PendingOrderItemContainer key={item.id}>
          <Fulname>{item.Fulname}</Fulname>
          <ProductsAndDetailsContainer>
            <Products>{item.products.join(", ")}</Products>
            <DateAndButtonContainer>
              <Date>{item.date}</Date>
              <ViewButton buttonType={BUTTON_TYPE_CLASSES.action}>
                View
              </ViewButton>
            </DateAndButtonContainer>
          </ProductsAndDetailsContainer>
        </PendingOrderItemContainer>
      ))}
    </PendingOrderListContainer>
  );
};

export default PendingOrderList;
