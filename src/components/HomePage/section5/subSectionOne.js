import style from "./subSectionOne.module.css";
import firstImage from "../../../media/katelyn-quantum-clinic-therapist.3a6d6def58354855716c.jpg";
import secondImage from "../../../media/maria-quantum-clinic.685061357b5665ee0883.jpg";
import ReactPlayer from "react-player";

function SubSectionOne() {
  return (
    <div className={style.sectionFive}>
      <div className={style.SubSectionOne}>
        <h3> Meet the founders </h3>

        <div className={`${style.tabs} ${style.tabOne}`}>
          <div>
            <h4>Katelyn Lehman,</h4>
            <h5>Ph.D. Chief Systems Architect and Co-Founder</h5>
            <p>
              Dr. Lehman completed her Ph.D. in Clinical Psychology with
              emphasis in Multicultural Community Psychology from Alliant
              International University in 2017. In her career, she has been
              privileged to serve diverse populations around the world ranging
              from people seeking asylum to chief executives across industries.
            </p>
          </div>

          <div>
            <img src={firstImage} alt="snj" />
          </div>
        </div>

        <div className={style.tabs}>
          <div>
            <img src={secondImage} alt="sjknlk" />
          </div>

          <div>
            <h4>Maria Ramos</h4>
            <h5>Ph.D. Chief Systems Architect and Co-Founder</h5>
            <p>
              Psy.D. Director of Clinical Operations and Co-Founder Dr. Ramos
              completed her Psy.D. in Clinical Psychology with emphasis in
              Family Systems from Alliant International University in 2019. Her
              research interests include posttraumatic stress and suicidality in
              Veteran communities. Dr. Ramos is also a Veteran of the United
              States Navy where she served two tours in both Operation Enduring
              Freedom and Operation Iraqi Freedom.
            </p>
          </div>
        </div>
      </div>

      <div className={style.videoContainer}>
        <p>Learn more about the science behind our services.</p>
        <ReactPlayer
          className={style.video}
          url="https://youtu.be/WhxjXduD8qw"
        />
      </div>
    </div>
  );
}

export default SubSectionOne;
