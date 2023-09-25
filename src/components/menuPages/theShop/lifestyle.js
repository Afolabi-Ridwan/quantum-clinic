import { lifestyle } from "./data";
import "./allsession.css";

function Lifestyle() {
  return (
    <div>
      <p className="itemHeader"> Lifestyle </p>

      <div className="sessions firstSession">
        <div className="container">
          {lifestyle.map((itemTab) => (
            <div className="getCard products">
              <div className="imageContainer">
                <img src={itemTab.image} alt="jk" />
              </div>
              <p className="productLabel"> {itemTab.header}</p>

              <p className="infoNote">{itemTab.note} </p>
              <h4>{itemTab.price}</h4>

              <button> {itemTab.button}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Lifestyle;
