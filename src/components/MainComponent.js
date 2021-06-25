import React from "react";
import "../styles/maincomponent.css";

const Maincomponent = () => {
  return (
    <div className="docker">
      <img
        src="https://unsplash.com/photos/hidES-ZSnRE"
        alt="api-not-working"
      />
      <div className="text-container">
        <h4>Name</h4>
        <h4 className="price-bold">Price</h4>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Maincomponent;
