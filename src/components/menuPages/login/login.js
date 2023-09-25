import style from "./login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <p className={style.loginPageHeader}> Login </p>

      <div className={style.login}>
        <h4>Login to your account</h4>
        <div className={style.formContainer}>
          {" "}
          <form className="form">
            <label for="email"> Email</label>
            <input
              style={{ marginBottom: "30px" }}
              type="email"
              id="email"
              placeholder="Email Address"
            />

            <label for="password"> Password </label>
            <input type="password" id="password" placeholder="Password" />

            <div className={style.forgotPassword}>
              <div className={style.rememberMe}>
                <input
                  style={{ marginRight: "5px", width: "10px" }}
                  type="checkbox"
                  id={style.rememberMe}
                />
                <label for={style.rememberMe}>Remember Me </label>
              </div>
              <div>
                <p> Forgot Password? </p>
              </div>
            </div>
            <button className={style.submitBtn}>
              <Link className={style.linkTag} to="/home">
                {" "}
                Sign In{" "}
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
