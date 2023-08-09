import "./spaInfo2.css";
import firstImage from "../../../media/center-for-healing.c39d0f65309f185ebeca.jpg";
import secondImage from "../../../media/stress-reduction-and-relaxation.dbb6b5f06c59df6a22bb.jpg";

function SpaInfoTwo() {
  return (
    <div className="spaInfoTwo">
      <div className="container">
        <h1>What does this service help with?</h1>
        <p>Psychological, Emotional & Spiritual Integration.</p>

        <div className="tabOne">
          <div className="text">
            <p> Chronic pain </p>
            <p> Chronic fatigue </p>
            <p> Stress disorders </p>
            <p> Immune disorders </p>
            <p> Neuromuscular disorders </p>
            <p> Some sensory processing disorders </p>
            <p> Feelings of hopelessness and helplessness </p>
            <p> Racing thoughts Sleep disorders </p>
            <p> Dependency Problems General anxiety </p>
          </div>

          <div>
            <img src={firstImage} alt="first" />
          </div>
        </div>
      </div>

      <div className="container containerTwo">
        <h1>What are some benefits of a Float Spa with Frequency Therapy?</h1>

        <div className="tabOne tabTwo">
          <div>
            <img src={secondImage} alt="second" />
          </div>
          <div className="text textTabTwo">
            <p> Pain reduction </p>
            <p> Improved energy </p>
            <p> Stress reduction and relaxation </p>
            <p> Improved sleep quality </p>
            <p> Improved creativity </p>
            <p> Enhanced performance </p>
            <p>Reduced inflammation </p>
            <p> Emotional processing </p>
            <p> Overall health and immune functioning </p>
            <p> Mental processing and flexibility </p>
            <p> Improved mood and energy </p>
          </div>
        </div>
      </div>

      <div className="spaImageTab">
        <div className="spaImageTabNote">
          <h4>A SPA TREATMENT FOR YOUR DNA</h4>
          <button> book now</button>
          <p>
            Our clinic is conveniently located in Elysian Valley, just 10
            minutes North of Downtown Los Angeles, California.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SpaInfoTwo;
