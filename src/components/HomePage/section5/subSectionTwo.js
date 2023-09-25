import style from "./subSectionTwo.module.css";
import Form from "./form";

function SubSectionTwo() {
  return (
    <div className={style.sectionFive}>
      <div className={style.SubSectionTwo}>
        <Form />

        <div className={style.tabTwo}>
          <p>
            Quantum Clinic is pioneering a model of prevention service in
            today’s chaotic wellness environment. We empower you to engage the
            unified field and activate your deepest potential for bioregenesis
            through stress reduction and relaxation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubSectionTwo;
