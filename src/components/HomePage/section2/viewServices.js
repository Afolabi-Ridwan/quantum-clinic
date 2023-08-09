import "./viewServices.css";
import firstImage from "../../../media/Float-therapy-los-angeles.8db73019e28b550a85a5.jpg";
import secondImage from "../../../media/Float-spa.aab923aa48261580a8a1.jpg";
import thirdImage from "../../../media/Heart-brain-coherence.8de21ee0615663bc8ccc.jpg";
import energyImage from "../../../media/deep-rest-session.19e966afebc8ff0c9a76.jpg";
import frequencyImage from "../../../media/Float-spa-near-me.d0b647ee1e51ce00a97a.jpg";
import vibrationImage from "../../../media/pain-reduction-therapy.342788acc6940b10a9eb.jpg";
import { Link } from "react-router-dom";

function ViewServices() {
  return (
    <div className="viewServices">
      {/*  div for the short description note */}

      <div className="shortInfoNote">
        <div className="lineX"></div>
        <div className="infos">
          <h1> A SPA TREATMENT FOR YOUR DNA </h1>
          <h2> Creating a movement by healing through coherence </h2>
          <p>
            At the <span> Quantum Clinic </span>, we offer an inclusive space
            for you to tune-in to your body's innate wisdom for epigenetic
            healing.
          </p>
        </div>
        <div className="lineX"></div>
      </div>

      {/* next is the div for the next three pictures */}

      <div className="brandImages">
        <img src={firstImage} alt="brand-images" />
        <img src={secondImage} alt="brand-images" />
        <img src={thirdImage} alt="brand-images" />
      </div>

      {/* next is the div for the latent images */}

      <div className="latentImagesContainer">
        <div className="latentImages">
          <img src={frequencyImage} alt="fImg" />
          <p> + </p>
          <img src={energyImage} alt="fImg" />
          <p> + </p>
          <img src={vibrationImage} alt="fImg" />
        </div>
      </div>

      {/* next is the div for a short info note and view services button */}

      <div className="viewServicesBtnContainer">
        <p>
          We leverage the latent potential of ENERGY, FREQUENCY, & VIBRATION to
          facilitate a deeply relaxing and restorative experience.
        </p>

        <button> <Link className="linkTag" to="/spa"> View Services </Link> </button>
      </div>
    </div>
  );
}

export default ViewServices;
