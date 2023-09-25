import style from "./bottomInfo.module.css";
import firstImage from "../../../media/Quantum-clinic-logo.68695130d1124863d8f4.jpg";

function BottomInfo() {
  return (
    <div className={style.tabThree}>
      <img src={firstImage} alt="sdqe" />
      <div className={style.menus}>
        <p className={style.firstSideBar}>HOME</p>
        <p className={style.sideBar}>THE SPA</p>
        <p className={style.sideBar}>THE SHOP</p>
        <p className={style.sideBar}>EVENTS</p>
        <p className={style.sideBar}>ABOUT</p>
        <p className={style.sideBar}>FAQS</p>
        <p className={style.sideBar}>AGREEMENT POLICY</p>
        <p className={style.lastSideBar}>CAREERS</p>
      </div>

      <p style={{ marginBottom: "15px" }}>
        2828 Newell Street. Suite 6, Los Angeles, CA 90039 - (909) 571-6186
      </p>

      <div>
        <p style={{ marginBottom: "15px", fontSize: "13px" }}>
          © 2023 Quantum Clinic. All Rights Reserved
        </p>
        <p style={{ fontSize: "13px" }}>
          Logo & website designed by Flow State Dynamic Studio and CT Digital.
          Website developed by CT Digital
        </p>
      </div>
    </div>
  );
}

export default BottomInfo;
