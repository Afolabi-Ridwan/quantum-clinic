import "./firstSession.css";
import firstImage from "./images/About-Quantum-Clinic.dc4fd2cb19d8a5f8f6cc.jpg";
import secondImage from "./images/Katelyn-quantum-clinic.4f1668666a449f4b0b8e.jpg";
import thirdImage from "./images/Maria-Ramos.6363496adcf184140eb2.jpg";
import { Link } from "react-router-dom";

function FirstSession() {
  return (
    <div className="about">
      <div className="firstSession">
        <img className="firstImage" src={firstImage} alt="rfa" />

        <div className="infoNoteContainer">
          <div className="infoNote">
            <h3>ABOUT QUANTUM CLINIC</h3>
            <p>
              In 2020 our founders, Dr. Ramos and Dr. Lehman decided to
              double-down on building the infrastructure for your most profound
              transformation and self-healing. Bridging their combined expertise
              across mental health in complex emergencies, treating trauma,
              addiction, and stress, they created an experience unlike anything
              else in Southern California.
            </p>
          </div>
        </div>

        <div className="authorsInfoSession">
          <div className="partOne">
            <img className="secondImage" src={secondImage} alt="jsfn" />
            <div className="note">
              <h3>
                {" "}
                Katelyn Lehman, Ph.D. Chief Systems Architect and Co-Founder
              </h3>
              <p>
                Dr. Lehman completed her Ph.D. in Clinical Psychology with
                emphasis in Multicultural Community Psychology from Alliant
                International University in 2017. In her career, she has been
                privileged to serve diverse populations around the world ranging
                from people seeking asylum to chief executives across
                industries.
              </p>
            </div>
          </div>

          <div className="partOne partTwo">
            <div className="note">
              <h3>
                Maria Ramos, Psy.D. Director of Clinical Operations and
                Co-Founder
              </h3>
              <p>
                Dr. Ramos completed her Psy.D. in Clinical Psychology with
                emphasis in Family Systems from Alliant International University
                in 2019. Her research interests include posttraumatic stress and
                suicidality in Veteran communities. Dr. Ramos is also a Veteran
                of the United States Navy where she served two tours in both
                Operation Enduring Freedom and Operation Iraqi Freedom.
              </p>
            </div>

            <img className="secondImage" src={thirdImage} alt="jsfn" />
          </div>
        </div>
      </div>

      <div className="shortNote">
        <h3>AT THE QUANTUM CLINIC, YOUR SERENITY IS OUR MISSION</h3>
        <div>
          <p>
            Because we all deserve a place to unplug and tune in. When you are
            empowered with the tools to reverse stress and connect to your inner
            wisdom, everything changes. You become lighter. You show up
            differently for the task at hand. You deepen your compassion for
            yourself and others. You gain clarity on your purpose, and courage
            to fulfill your mission. At the Quantum Clinic we offer you an
            opportunity to reset your baseline. Our services are evidence-based,
            rooted in an understanding of epigenetics and biophysics to promote
            deep cellular resonance and heart-brain coherence. At the Quantum
            Clinic, your serenity is our mission. This is subtle energy work at
            it's finest. Our clinic is conveniently located in Elysian Valley,
            just 10 minutes North of Downtown Los Angeles, California.
          </p>

          <button>
            {" "}
            <Link className="linkTag" to="/spa">
              {" "}
              View Services{" "}
            </Link>{" "}
          </button>
        </div>{" "}
      </div>
    </div>
  );
}

export default FirstSession;
