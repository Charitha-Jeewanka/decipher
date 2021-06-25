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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            consequatur maiores, amet ex repellendus necessitatibus quaerat
            incidunt vel doloribus doloremque ratione non alias ut illo
            explicabo odio, magnam inventore natus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam asperiores eius amet neque
            perferendis dolores ad unde error minus. Voluptas quibusdam alias
            corrupti, nostrum quidem voluptatem cum consequuntur quod dicta?
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
