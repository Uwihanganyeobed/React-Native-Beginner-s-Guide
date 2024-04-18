import React, { useContext } from "react";
import "./CartItems.css";
import remove_icon from "../../../assets/cart_cross_icon.png";
import { CartContext } from "../../../Context/ItemContex";

const CartItems = () => {
  const { cartItems, all_products, removeItem } = CartContext();

  function removeFromCart(id){
    removeItem(id)
  }

  // Function to calculate the total price of an item considering its quantity
  const calculateItemTotal = (id) => {
    const product = all_products.find((item) => item.prodId == id);
    const quantity = cartItems.filter((item) => item == id).length;
    return product.new_price * quantity;
  };

  // Function to calculate the total price of all items in the cart
  const calculateCartTotal = () => {
    let total = [];
    cartItems.forEach((id) => {
      const itemTotal = calculateItemTotal(id);
      if (!total.includes(itemTotal)) {
        total.push(itemTotal);
      }
    });
    return total;
  };

  // Create a set of unique product IDs
  const uniqueProductIds = [...new Set(cartItems)];

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {uniqueProductIds.map((id) => {
        const product = all_products.find((item) => item.prodId == id);
        return (
          <div key={id}>
            <div className="cartitems-format cartitems-format-main">
              <img src={product.prodImage} className="carticon-product-icon" alt="" />
              <p>{product.prodName}</p>
              <p>${product.new_price}</p>
              <button className="cartitems-quantity">{cartItems.filter((item) => item == id).length}</button>
              <p>${calculateItemTotal(id)}</p>
              <img
              className="right-me"
                src={remove_icon}
                onClick={() => {
                  removeFromCart(id);
                }}
                alt=""
              />
            </div>
            <hr />
          </div>
        );
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${calculateCartTotal()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${calculateCartTotal()}</h3>
            </div>
          </div>
          <button>Proceed to Checkout</button>
        </div>
        <div className="cart-items-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promocode" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

