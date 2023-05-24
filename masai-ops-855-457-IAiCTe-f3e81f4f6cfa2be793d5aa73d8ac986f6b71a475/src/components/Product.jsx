import { useState } from "react";
import "./product.module.css"

const Product = ({name,price,quantity,id,handleQty}) => {
  const [qty, setQty] = useState(quantity);

  const handleQuantity=(id,payload)=>{
    setQty(qty+payload);
    console.log(typeof(payload),payload)
    console.log(typeof(qty),qty)
    
    handleQty(id,payload)
  }
  return (
    <>
      <div data-testid="product-container" className="div" key={id} >
        <h2 data-testid="product-name">{name}</h2>
        <h2 data-testid="product-price">{price}</h2>
        <button data-testid="quantity-increment" onClick={()=>{handleQuantity(id,1)}} >+</button>
        <h2 data-testid="product-quantity">{qty}</h2>
        <button data-testid="quantity-decrement" disabled={qty<=0} onClick={()=>{handleQuantity(id,-1)}} >-</button>
      </div>
    </>
  );
};
export default Product;
