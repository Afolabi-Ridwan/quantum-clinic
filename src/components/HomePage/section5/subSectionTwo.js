import style from "./subSectionTwo.module.css";
import firstImage from "../../../media/Quantum-clinic-logo.68695130d1124863d8f4.jpg";

function SubSectionTwo() {
  return (
    <div className={style.sectionFive}>
      <div className={style.SubSectionTwo}>
        <div className={style.tabOne}>
          <div className={style.texts}>
            <h4>Subscribe to our newsletter</h4>
            <p>Get the latest updates on Quantum Clinic</p>
          </div>
          <div>
            <form>
              <input placeholder="First Name" type="text" />
              <input
                placeholder="Last Name"
                type="text"
                style={{ margin: "10px  10px 0 10px" }}
              />
              <input placeholder="Email" type="email" />
              <button type="submit"> Subscribe </button>
            </form>
          </div>
        </div>

        <div className={style.tabTwo}>
          <p>
            Quantum Clinic is pioneering a model of prevention service in
            today’s chaotic wellness environment. We empower you to engage the
            unified field and activate your deepest potential for bioregenesis
            through stress reduction and relaxation.
          </p>
        </div>

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
              Logo & website designed by Flow State Dynamic Studio and CT
              Digital. Website developed by CT Digital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubSectionTwo;
