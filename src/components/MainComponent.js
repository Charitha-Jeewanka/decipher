import React from "react";
import ItemCard from "./itemCard";
import data from "../assets/testData";
import "../styles/maincomponent.css";
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MainComponent = () => {
  console.warn(data.productData);
  return (
    <>
      <section>
        <div>
          {data.productData.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MainComponent;
