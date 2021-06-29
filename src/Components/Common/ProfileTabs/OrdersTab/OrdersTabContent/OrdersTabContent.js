import React from 'react';
import './OrdersTabContent.css';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';

function OrdersTabContent(props) {
  /* Awaiting shipping | Shipped | Dispatched | Delivered */
  const {
    image,
    productName,
    deliveryTime,
    itemQuantity,
    deliveryStatus,
    itemCost,
  } = props;
  return (
    <div className="ordersContentHolder">
      <img src={image} />
      <div className="productInfo">
        <h1>{productName}</h1>
        <h3>Quantity: {itemQuantity} pcs</h3>
        <h3>Delivery time: {deliveryTime}</h3>
      </div>
      <div className="productStatus">
        <h1>{itemCost}</h1>
        <h3>{deliveryStatus}</h3>
        <div className="viewDiv">
          <p>View</p>
          <KeyboardArrowRightOutlinedIcon
            color="disabled"
            style={{ fontSize: 60 }}
          />
        </div>
      </div>
    </div>
  );
}

export default OrdersTabContent;
