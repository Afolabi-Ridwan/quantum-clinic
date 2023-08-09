import "./subSectionOne.css";

import firstImage from "../../../media/Scalar-Upgrade-floatation-REST.111ee1ff21ef6d6ccf0b.jpg";
import secondImage from "../../../media/Float-therapy-session.9df985f262d45d9d593c.jpg";
import thirdImage from "../../../media/Floatation-REST.57178376a1da78a078f2.jpg";

import energyImage from "../../../media/deep-rest-session.19e966afebc8ff0c9a76.jpg";
import frequencyImage from "../../../media/Float-spa-near-me.d0b647ee1e51ce00a97a.jpg";
import vibrationImage from "../../../media/pain-reduction-therapy.342788acc6940b10a9eb.jpg";

function SubSectionOne() {
  const sessions = [
    {
      sessionImage: firstImage,
      service: "Scalar Upgrade",
      rate: "4.5",
      duration: "45 minutes",
      price: "$212",
      button: "Book Now",
    },
    {
      sessionImage: secondImage,
      service: "Floatation REST - Luxury R...",
      rate: "4.4",
      duration: "60 minutes",
      price: "$118",
      button: "Book Now",
    },
    {
      sessionImage: thirdImage,
      service: "Floatation REST - Deluxe R...",
      rate: "4.7",
      duration: "60 minutes",
      price: "$97",
      button: "Book Now",
    },
  ];

  return (
    <div className="SubSectionOne">
      <div className="container">
        {sessions.map((session) => (
          <div className="tabs">
            <div className="imageContainer">
              <img src={session.sessionImage} alt="sessionImages" />{" "}
            </div>

            <div className="serviceAndRate">
              <h3>{session.service}</h3>
              <p>{session.rate}</p>
            </div>
            <h5>{session.duration}</h5>
            <h4>
              {session.price}
              <span>/session</span>
            </h4>

            <button>{session.button}</button>
          </div>
        ))}
      </div>

      <div className="secondTab">
        <div>
          <img src={frequencyImage} alt="fImg" />
          <h4>Benefits of Scalar Upgrade</h4>
          <p>
            Regenerative healing from trauma and toxic stress. Harmonization and
            clearing of energetic blocks. Energy boost and relief from chronic
            fatigue.
          </p>
        </div>

        <div className="floatationRest">
          <img src={energyImage} alt="fImg" />
          <h4>Benefits of Floatation REST</h4>
          <p>
            Reduced inflammation. Improved performance. Increased mental clarity
            and focus. Relief from chronic pain. Alpha or Theta brainwave
            shifts.
          </p>
        </div>

        <div>
          <img src={vibrationImage} alt="fImg" />
          <h4>Benefits of Frequency Therapy</h4>
          <p>
            Regulation of central nervous system. Improved mental processing and
            flexibility. Increased attention and concentration. Emotional
            processing
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubSectionOne;
