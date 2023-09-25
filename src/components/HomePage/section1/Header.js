import "./Header.css";
import headerLogo from "../../../media/top-logo.cf02c00d3ab6af5f8395.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="header">
      <div className="container">
        <div>
          <img src={headerLogo} alt="headerLogo" />
        </div>
        <div className="navbar">
          <ul>
            <li
              onClick={() => handleItemClick("Item 1")}
              className={selectedItem === "Item 1" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/">
                home
              </Link>{" "}
            </li>
            <li
              onClick={() => handleItemClick("Item 2")}
              className={selectedItem === "Item 2" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/theSpa">
                the spa
              </Link>{" "}
            </li>
            <li
              onClick={() => handleItemClick("Item 3")}
              className={selectedItem === "Item 3" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/theShop">
                the shop
              </Link>{" "}
            </li>
            <li
              onClick={() => handleItemClick("Item 4")}
              className={selectedItem === "Item 4" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/events">
                events
              </Link>{" "}
            </li>
            <li
              onClick={() => handleItemClick("Item 5")}
              className={selectedItem === "Item 5" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/about">
                about
              </Link>
            </li>
            <li
              onClick={() => handleItemClick("Item 6")}
              className={selectedItem === "Item 6" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/faqs">
                faqs
              </Link>
            </li>
            <li
              onClick={() => handleItemClick("Item 7")}
              className={selectedItem === "Item 7" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/blog">
                blog
              </Link>
            </li>
            <li
              onClick={() => handleItemClick("Item 8")}
              className={selectedItem === "Item 8" ? "bold-text" : ""}
            >
              <Link className="linkTag" to="/login">
                login
              </Link>
            </li>
          </ul>
        </div>
        <div className="booking">
          <p> book now</p>
          <p> 0 </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
