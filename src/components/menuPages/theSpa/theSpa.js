import SubSectionOne from "../../HomePage/section4/subSectionOne";
import "./theSpa.css";
import firstImage from "../../../media/Spa-for-healing.f1a147505eed53f0ae18.jpg";
import Header from "../../HomePage/section1/Header";

function TheSpa() {
  return (
    <div className="theSpa">
      <Header />
      <div>
        <img className="topImage" src={firstImage} alt="d" />
      </div>

      <div className="theSpaTexts">
        <h5>THE FLOAT SPA FOR YOUR HEALING.</h5>
        <p>
          At the Quantum Clinic, we offer an inclusive space for you to tune-in
          to your body's innate wisdom for epigenetic healing. We leverage the
          latent potential of ENERGY, FREQUENCY, & VIBRATION to facilitate a
          deeply relaxing and restorative experience.
        </p>
      </div>

      <SubSectionOne />
    </div>
  );
}

export default TheSpa;
