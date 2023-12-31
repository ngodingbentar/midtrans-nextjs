import React, { useState } from "react";

const Checkout = ({product, setProductId}) => {
  const [quantity, setQuantity] = useState(1)

  const decreaseQuantity = () => {
    setQuantity((prevState) => (quantity > 1 ? prevState - 1 : null));
  };

  const increaseQuantity = () => {
    setQuantity((prevState) => prevState + 1);
  };

  const checkout = async () => {
    setProductId(product.id)
    const data = {
      id: product.id,
      productName: product.title,
      price: product.price,
      quantity,
    }

    // you can also get the token value by using code in .archived/api/token, then move it to app/
    // const response = await fetch("/api/token", {

    const response = await fetch("be/midtrans-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const requestData = await response.json()
    window.snap.pay(requestData.token)
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex sm:gap-4">
          <button
            className="transition-all hover:opacity-75"
            onClick={decreaseQuantity}
          >
            ➖
          </button>

          <input
            type="number"
            id="quantity"
            value={quantity}
            className="h-10 w-16 text-black border-transparent text-center"
            onChange={quantity}
          />

          <button
            className="transition-all hover:opacity-75"
            onClick={increaseQuantity}
          >
            ➕
          </button>
        </div>
        <div>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={checkout}>
            Checkout
          </button>
        </div>
      </div>
      
    </>
  );
};

export default Checkout;
