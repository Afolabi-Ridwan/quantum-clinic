import { skincare } from "./data";
import "./allsession.css";

function SkinCare() {
  return (
    <div>
      <p className="itemHeader"> Skin Care </p>

      <div className="sessions firstSession">
        <div className="container">
          {skincare.map((itemTab) => (
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

export default SkinCare;
