import React, { forwardRef, useEffect } from "react";

const Modal = forwardRef(({ onCheckout, cartItems, setCart, total }, ref) => {
  const handleClose = () => {
    ref.current.close();
  };

  const handleIncrement = (id) => {
    setCart((prev) => {
      const newList = [...prev];
      const existingItem = newList.find((item) => item.id === id);
      if (existingItem) {
        existingItem.amount++;
        return newList;
      }
      return newList;
    });
  };

  const handleDecrement = (id) => {
    setCart((prev) => {
      const newList = [...prev];
      const existingItem = newList.find((item) => item.id === id);
      if (existingItem && existingItem.amount > 0) {
        existingItem.amount--;
        return newList;
      }
      return newList;
    });
  };

  return (
    <>
      <dialog ref={ref} className="modal ">
        <div className="cart">
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <p>{item.name}</p>
                <span className="cart-item-actions">
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  {item.amount}
                  <button onClick={() => handleDecrement(item.id)}>-</button>
                </span>
              </li>
            ))}
          </ul>
          <p className="cart-total">{`$${total}`}</p>
          <div className="modal-actions">
            <p className="text-button" onClick={handleClose}>
              Close
            </p>
            <button className="button" onClick={onCheckout}>
              Go to Checkout
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
});

export default Modal;
