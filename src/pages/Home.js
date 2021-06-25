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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
            consequatur maiores, amet ex repellendus necessitatibus quaerat
            incidunt vel doloribus doloremque ratione non alias ut illo
            explicabo odio, magnam inventore natus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam asperiores eius amet neque
            perferendis dolores ad unde error minus. Voluptas quibusdam alias
            corrupti, nostrum quidem voluptatem cum consequuntur quod dicta?
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
