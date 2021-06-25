import React from 'react';
import './OrdersTabContent.css';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

function OrdersTabContent(props) {
  const {
    image,
    productName,
    deliveryTime,
    itemQuantity,
    deliveryStatus,
    itemCost,
  } = props;
  return (
    <div className="contentHolder">
      <img src={image} />
      <div className="productInfo">
        <h1>{productName}</h1>
        <h3>Quantity: {itemQuantity} pcs</h3>
        <h3>Delivery time: {deliveryTime}</h3>
      </div>
      <div className="productStatus">
        <h1>{itemCost}</h1>
        <h3>{deliveryStatus}</h3>
        <CancelOutlinedIcon color="primary " style={{ fontSize: 50 }} />
      </div>
    </div>
  );
}

export default OrdersTabContent;
