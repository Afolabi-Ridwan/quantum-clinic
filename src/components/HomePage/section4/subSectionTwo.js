import "./subSectionTwo.css";
import firstImage from "../../../media/Lauren.f83b4164337b6dc0487f01ca6db25cf2.svg";
import { useState } from "react";

function SubSectionTwo() {
  const comments = [
    {
      image: firstImage,
      comment: `My fiancé and I did a luxury float together. It was great 
        from the start with our meditation that really helped to get us ready for the float. 
        I was a bit hesitant since I have never floated before but I have 
        to admit it was very relaxing and even helped my chronic lower back pain.
         I think it also helped myself and my fiancé become closer to each other, and
        even just having that space to relax together was important
        for me. The staff are great at Quantum clinic, all super
        friendly and walked us through all the steps so that we felt
        comfortable to complete our service. I will definitely be back
        and already recommend it to everyone I know!`,

      Name: "- Lauren K.",
    },
    {
      image: firstImage,
      comment: `"The two guides that welcomed us were so thoughtful and considerate too. Explaining the whole process and wanted us to know they are available like therapists to hear of our wellness journey with the in person guided mediation, then the float, the shower and if we wanted to, the vision board or arts and crafts to translate our insights from the float experience into something physically expressed. This is definitely a place that is not only beautifully and carefully decorated but really supportive towards your personal transformation. Enjoy your experience here you might always remember it like we will!"
      `,

      Name: "- Glyde B.",
    },
    {
      image: firstImage,
      comment: `"If you are looking for next level float- this is it. They include vibration/frequency therapy into your float and it’s incredibly amplifying of the relaxation benefits. Felt my system completely relax and reset. Can’t recommend enough- this is what I always wanted floats to be and have never experienced this level of relaxation anywhere else. The rooms are spacious enough to starfish float without touching anything. It’s like floating in space. HIGHLY recommend."

      `,

      Name: "- Madeline M.",
    },

    {
      image: firstImage,
      comment: `    "Amazing experience, had my first float today and will absolutely be returning for more!"`,

      Name: "- Jackson P.",
    },
  ];

  const [state, updateState] = useState(false);
  //   let slider = false;
  function slideHandler() {
    // return (slider = true);
    return updateState(true);
  }

  return (
    <div className="SubSectionTwo">
      <h3> Testimonial</h3>

      <div className="container">
        {comments.map((comment) => (
          <div className="commentsContainer">
            <div className="comments">
              <div className="commentSlides">
                <img src={comment.image} alt="jsjswed" />

                <div>
                  <p>{comment.comment}</p>
                  <button
                    className={`"slide" ${state ? "right" : ""}`}
                    onClick={slideHandler}
                  >
                    {" "}
                    right
                  </button>
                  <h5>{comment.Name}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="FAQscontainer">
        <div className="FAQs">
          <p> Need more clarifications? Read our FAQs below:</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default SubSectionTwo;
