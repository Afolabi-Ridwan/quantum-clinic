import "./about.css";
import FirstSession from "./firstSession";
import SpaImageSection from "../../HomePage/section3/spaImageSection";
import Form from "../../HomePage/section5/form";
function About() {
  return (
    <div className="about">
      <FirstSession />
      <div className="spaImageSection">
        <SpaImageSection />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default About;
