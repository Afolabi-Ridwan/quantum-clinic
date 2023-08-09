import "./spaInfo1.css";

import firstImage from "../../../media/Floatation-therapy-session.4bd6eda1db772378f0eb.jpg";
import secondImage from "../../../media/Frequency-therapy-near-me.b6860265aacd8e453f9e.jpg";
function SpaInfoOne() {
  return (
    <div className="spaInfoOne">
      <div className="container">
        <div className="infoContainer">
          <div className="infoNote">
            <h2> Why should I try a float spa with frequency therapy? </h2>

            <p>
              Floatation Therapy at Quantum Clinic is different from other
              floatation spas. We empower you with the skills to achieve
              coherence, the opposite of stress. This occurs naturally when you
              focus on the energetic centre of your heart while generating a
              positive emotion. The result is a shift in your brainwave patterns
              into deeper states of relaxation and surrender. Floatation with
              Frequency Therapy takes floating to the next level by using sound
              to facilitate a tuning of the electromagnetic information in your
              body. At Quantum Clinic, we’ve created a luxury immersive
              experience that refreshes and rejuvenates your mind, body, spirit,
              and soul.
            </p>
          </div>

          <div className="infoImage">
            <img src={firstImage} alt="spa" />
            <img src={secondImage} alt="spa" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpaInfoOne;
