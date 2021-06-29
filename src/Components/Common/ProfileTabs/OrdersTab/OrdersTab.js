import React from 'react';
import './OrdersTab.css';
// Component imports ---------------------
import OrdersTabContent from './OrdersTabContent/OrdersTabContent';
// image imports -------------------------
import sample_1 from '../../../Images/imageFolder/mockOrder_1.jpg';
import sample_2 from '../../../Images/imageFolder/mockOrder_2.jpg';
import sample_3 from '../../../Images/imageFolder/mockOrder_3.jpg';

function OrdersTab() {
  return (
    <div className="Orderscontainer">
      <OrdersTabContent
        image={sample_1}
        productName="Pro Race ceramic brakes"
        itemQuantity="2"
        deliveryTime="3 - 5 working days"
        itemCost="$300,000"
        deliveryStatus="Shipped"
      />
      <OrdersTabContent
        image={sample_2}
        productName="RH Door skin"
        itemQuantity="6"
        deliveryTime="Today"
        itemCost="$14,755"
        deliveryStatus="Dispatched"
      />
      <OrdersTabContent
        image={sample_3}
        productName="Mikano off-road Tyres"
        itemQuantity="17"
        deliveryTime="14 - 28 working days"
        itemCost="$4,000"
        deliveryStatus="Awaiting Shipping"
      />
    </div>
  );
}

export default OrdersTab;
