import "./Header.css";
import headerLogo from "../../../media/top-logo.cf02c00d3ab6af5f8395.png";
function Header() {
  return (
    <div className="header">
      <div className="container">
        <div>
          <img src={headerLogo} alt="headerLogo" />
        </div>
        <div className="navbar">
          <ul>
            <li>home</li>
            <li>the spa</li>
            <li>the shop</li>
            <li>events</li>
            <li>about</li>
            <li>faqs</li>
            <li>blog</li>
            <li>login</li>
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
