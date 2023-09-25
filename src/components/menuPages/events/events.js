import style from "./events.module.css";
import topImage from "./images/Float-therapy-los-angeles.8db73019e28b550a85a5.jpg";
import { info } from "./data";

function Events() {
  return (
    <div className={style.events}>
      <img src={topImage} className={style.topImage} alt="jksd" />
      <p className={style.header}>REGISTER AND LEARN FROM EXPERTS</p>

      <div className={style.container}>
        {info.map((itemTab) => (
          <div className={`${style.getCard} ${style.products}`}>
            <div className={style.imageContainer}>
              <img className={style.image} src={itemTab.image} alt="jk" />
            </div>
            <p className={style.productLabel}> {itemTab.title}</p>

            <p className={style.infoNote}>{itemTab.time} </p>

            <button> {itemTab.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
