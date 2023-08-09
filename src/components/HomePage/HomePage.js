import "./HomePage.css";
import Header from "./section1/Header";
import Video from "./section1/video";
import SectionTwo from "./section2/section2";
import SectionThree from "./section3/section3";
import SectionFour from "./section4/section4";
import SectionFive from "./section5/section5";

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Video />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default HomePage;
