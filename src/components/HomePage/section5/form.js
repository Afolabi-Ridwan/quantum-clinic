import style from "./subSectionTwo.module.css";

function Form() {
  return (
    <div className={style.tabOne}>
      <div className={style.texts}>
        <h4>Subscribe to our newsletter</h4>
        <p>Get the latest updates on Quantum Clinic</p>
      </div>
      <div>
        <form className={style.form}>
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
  );
}

export default Form;
