import React from 'react';
import './OrdersTab.css';
// Component imports ---------------------
import OrdersTabContent from './OrdersTabContent/OrdersTabContent';
// image imports -------------------------
import sample from '../../../Images/imageFolder/mockCar_2.jpg';

function OrdersTab() {
  return (
    <div className="container">
      <OrdersTabContent
        image={sample}
        productName="Pro Race ceramic brakes"
        itemQuantity="2"
        deliveryTime="3 - 5 working days"
        itemCost="$300,000"
        deliveryStatus="Shipped"
      />
      <OrdersTabContent
        image={sample}
        productName="Pro Race ceramic brakes"
        itemQuantity="2"
        deliveryTime="3 - 5 working days"
        itemCost="$300,000"
        deliveryStatus="Shipped"
      />
      <OrdersTabContent
        image={sample}
        productName="Pro Race ceramic brakes"
        itemQuantity="2"
        deliveryTime="3 - 5 working days"
        itemCost="$300,000"
        deliveryStatus="Shipped"
      />
    </div>
  );
}

export default OrdersTab;
