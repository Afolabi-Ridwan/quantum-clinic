import "./blog.css";
import Form from "../../HomePage/section5/form";
import firstImage from "./images/Untitled design (49).png";
import secondImage from "./images/Untitled design (42).png";
import thirdImage from "./images/Untitled design (50).png";
import fourthImage from "./images/Untitled design (44).png";
import fifthImage from "./images/Untitled design (37).png";
import sixthImage from "./images/Exterior_0A0A2460_Final.jpg";
import seventhImage from "./images/Float_5_Panorama_Final.jpg";
import eightImage from "./images/Untitled design (51).png";
import ninthImage from "./images/Untitled design (48).png";

const featuredPost = [
  {
    image: secondImage,
    header:
      "Harnessing Coherence: Managing Anxious Thoughts during Float Therapy with Frequency Therapy",
    note: "At Quantum Clinic unique service model combining Float Therapy with Frequency Therapy offers a profound opportunity for deep relaxation, rejuvenation,...   ",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 1,
  },

  {
    image: thirdImage,
    header:
      "Exploring the Dynamics of Heart-Brain Coherence and the Unified Field",
    note: "The human body is a remarkable system composed of numerous interconnected parts. Among these, the heart and the brain play essential roles in our over... ",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 2,
  },

  {
    image: fourthImage,
    header:
      "Finding Inner Calm: Managing Trauma Symptoms During Float Therapy with Frequency Therapy",
    note: "Living with trauma symptoms can be incredibly challenging. The lingering symptoms of trauma can disrupt our daily lives and impede our emotional well-...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 3,
  },
];

const allStories = [
  {
    image: eightImage,
    header:
      "The Vital Role of Quaternary Prevention: A Holistic Approach to Wellness",
    note: "In the realm of healthcare, the concept of prevention is often discussed in terms of primary, secondary, and tertiary levels. However, there is anothe...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 1,
  },

  {
    image: thirdImage,
    header:
      "Exploring the Dynamics of Heart-Brain Coherence and the Unified Field",
    note: "The human body is a remarkable system composed of numerous interconnected parts. Among these, the heart and the brain play essential roles in our over... ",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 2,
  },

  {
    image: firstImage,
    header:
      "The Power of Positive Emotions: Healing Through Coherence and Embodiment Practice",
    note: "In our fast-paced, often stressful lives, finding moments of peace and harmony is crucial for our overall well-being. Did you know that positive emoti...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 3,
  },

  {
    image: ninthImage,
    header: "Achieving Harmony ",
    note: "In an age dominated by technological advancements and constant connectivity, achieving harmony within our bodies and minds has become increasingly cha...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 4,
  },

  {
    image: fourthImage,
    header:
      "Finding Inner Calm: Managing Trauma Symptoms During Float Therapy with Frequency Therapy",
    note: "Living with trauma symptoms can be incredibly challenging. The lingering symptoms of trauma can disrupt our daily lives and impede our emotional well-...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 5,
  },

  {
    image: secondImage,
    header:
      "Harnessing Coherence: Managing Anxious Thoughts during Float Therapy with Frequency Therapy",
    note: "At Quantum Clinic unique service model combining Float Therapy with Frequency Therapy offers a profound opportunity for deep relaxation, rejuvenation,...   ",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 6,
  },

  {
    image: fifthImage,
    header:
      "The Power of Floatation REST with Frequency Therapy and Heart-Brain Coherence: A Path to Transforming for Chronic Inflammatory and Autoimmune Diseases.",
    note: "In recent years, the combination of Floatation REST (Restricted Environmental Stimulation Therapy), Frequency Therapy, and Heart-Brain Coherence has g...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 7,
  },

  {
    image: seventhImage,
    header: "A Unified Protocol for Mind, Body, Spirit, & Soul.",
    note: "Combining biofeedback training in heart-brain coherence with frequency therapy and floatation REST can have several potential benefits for the mind, b...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 8,
  },

  {
    image: sixthImage,
    header:
      "Quantum Healing: Harnessing the Power of Heart-Brain Coherence and SIFT",
    note: "Quantum healing is a holistic approach to health and wellness that is gaining popularity due to its focus on the interconnectedness of the mind, body,...",
    bottomTag: "By",
    bottomTag2: "Quantum Clinic",
    id: 9,
  },
];

function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <h1>QUANTUM CLINIC BLOG</h1>

        <div className="line">
          <div className="firstTab">
            <div>
              <img src={firstImage} alt="skj" />
            </div>
            <div className="shortNote">
              <h3>
                The Power of Positive Emotions: Healing Through Coherence and
                Embodiment Practice
              </h3>
              <p>
                In our fast-paced, often stressful lives, finding moments of
                peace and harmony is crucial for out overall well-being. Did you
                know that positive emotion...
              </p>

              <p>
                {" "}
                By <span>Quantum Clinic</span>
              </p>
            </div>
          </div>
        </div>

        <div className="secondTab">
          <div className="header">
            <h3> Featured Posts </h3>
            <p> A must read for you to get the right treatment!</p>
          </div>

          <div className="posts">
            {featuredPost.map((eachPost) => (
              <div className="eachPost" key={eachPost.id}>
                <img src={eachPost.image} alt="sjk" />
                <h2> {eachPost.header}</h2>
                <p>{eachPost.note}</p>
                <div className="bottomTag">
                  <p>{eachPost.bottomTag}</p>
                  <p> {eachPost.bottomTag2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="thirdTab">
        <h4
          style={{ marginTop: "40px", fontSize: "25px", marginBottom: "5px" }}
        >
          {" "}
          All Stories
        </h4>
        <p style={{ marginBottom: "15px", fontSize: "15px", color: "gray" }}>
          All Stories on the Quantum Clinic Blog
        </p>

        <div className="container">
          {allStories.map((eachStory) => (
            <div className="eachStory" key={eachStory.id}>
              <div>
                <img src={eachStory.image} alt="knf" />
              </div>

              <div className="shortNote">
                <h3> {eachStory.header}</h3>
                <p className="note"> {eachStory.note}</p>
                <div className="bottomTag">
                  <p>{eachStory.bottomTag}</p>
                  <p> {eachStory.bottomTag2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "80px", marginTop: "30px" }}>
        <Form />
      </div>
    </div>
  );
}

export default Blog;
