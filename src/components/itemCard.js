import React from "react";
import { useCart } from "react-use-cart";
import axios from "axios";
import "../styles/maincomponent.css";

const ItemCard = (props) => {
  const postData = () => {
    const data = {
      username: "Hashika",
      password: "Hashi",
    };
    axios
      .post("https://ecoerest.coma/pi/login", data)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="docker">
      <div className="card">
        <img src={props.img} alt="" className="card-img" />
        <div className="card-body">
          <h5>{props.title}</h5>
          <h5>{props.desc}</h5>
          <p>{props.price}</p>
          <button onClick={postData}>Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default ItemCard;
