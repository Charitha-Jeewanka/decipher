import React, { useState, useRef, useEffect } from "react";
import { navitems, navitems2 } from "../pages/data";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [shownavitems, setShownavitems] = useState(false);
  const navitemsContainerRef = useRef(null);
  const navitemsRef = useRef(null);
  const displaynavitems = () => {
    setShownavitems(!shownavitems);
  };
  useEffect(() => {
    const navitemsHeight = navitemsRef.current.getBoundingClientRect().height;
    if (shownavitems) {
      navitemsContainerRef.current.style.height = `${navitemsHeight}px`;
    } else {
      navitemsContainerRef.current.style.height = "0px";
    }
  }, [shownavitems]);
  return (
    <section>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <button className="nav-toggle" onClick={displaynavitems}>
              <FaBars />
            </button>
          </div>
          <div className="navitems-container" ref={navitemsContainerRef}>
            <ul className="navitems" ref={navitemsRef}>
              {navitems.map((navitem) => {
                const { id, url, text } = navitem;
                return (
                  <li key={id}>
                    {/* <a href={url}>{text}</a> */}
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className="navitems2">
            {navitems2.map((cartIcon) => {
              const { id, url, text } = cartIcon;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
