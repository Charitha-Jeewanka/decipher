import React from "react";
import "../styles/homestyles.css";
import chocpic from "../assets/pic1.jpg";
import pastapic from "../assets/pic2.jpg";

const Home = () => {
  return (
    <section className="container">
      <h2>Explore our products</h2>
      <section id="chocolate">
        <div className="chocolate-description">
          <h3>Finest chocolate</h3>
          <p>
            With over 45 years experience in the chocolate manufacturing field
            in United Kingdom, EcoE bars has reached the pinnacle. We, EcoE Bar
            products which have been popular all over Europe for a long time
            using a secret recipe that has been developed for a long time, have
            now been able to invade even the world market. Simultaneously, the
            EcoE Bar chocolate division, with its excellent ingredients and
            experienced staff, is committed to delivering the best product
            output. Moreover, EcoE bar chocolate products with different flavors
            have won the hearts and love of all. Don't be too late and join with
            us today for a mind-blowing taste.
          </p>
        </div>
        <div className="chocolate-picture">
          <a href="/chocolate">
            <img src={chocpic} className="photo" />
          </a>
        </div>
      </section>
      <section id="pasta">
        <div className="pasta-description">
          <h3>Best Pasta you can find</h3>
          <p>
            The EcoE Bar, which did not stop at the chocolate business, after a
            long journey in food industry with chocolate, opened a new dimension
            in the food industry to invade the Europe market, with the passage
            of time, as an extension of another business and turned to pasta
            products. As a result, the EcoE Bar is now able to bring you the
            finest pasta products in a variety of forms. With a wide range of
            fresh and dry pasta products, you can enjoy a wide range of
            delicious products. Join the EcoE Bar products and be aware of the
            difference.
          </p>
        </div>
        <div className="pasta-picture">
          <a href="/pasta">
            <img src={pastapic} className="photo" />
          </a>
        </div>
      </section>
    </section>
  );
};

export default Home;
