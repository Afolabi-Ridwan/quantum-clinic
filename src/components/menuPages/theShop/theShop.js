import "./theShop.css";
import firstImage from "../../../media/Quantum-clinic-logo.68695130d1124863d8f4.jpg";
import Programmatic from "./programmatic";
import SkinCare from "./skincare";
import Lifestyle from "./lifestyle";
import Wellness from "./wellness";

function TheShop() {
  return (
    <div className="theShop">
      <div className="container">
        <div className="firstTab">
          <p className="header"> SHOP YOUR ITEMS </p>
          <div className="getCard">
            <p> E-Gift Card</p>

            <img src={firstImage} alt="jk" />

            <button> Buy Now</button>
          </div>
        </div>

        <div className="secondTab">
          <Programmatic />
          <SkinCare />
          <Wellness />
          <Lifestyle />
        </div>
      </div>
    </div>
  );
}

export default TheShop;
