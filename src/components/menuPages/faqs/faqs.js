import style from "./faqs.module.css";
import firstImage from "./images/frequency-therapy.324a727609e27543d56b.jpg";
import { useState } from "react";
import Form from "../../HomePage/section5/form";

function Faqs() {
  const [info, updateInfo] = useState({
    items: [
      {
        title: "What is Quantum Clinic?",
        note: `The Quantum Clinic is a model of preventative care with an emphasis on psychological,
   emotional, spiritual, and physical wellbeing. We offer a private and secure space for individuals to 
   tap into their innate wisdom for epigenetic healing through coherence. At Quantum Clinic, 
   we have developed a unique service by incorporating aspects of biofeedback training, deep rest, 
   and frequency therapy to create an experience unlike anything else on the market`,
        id: "1",
      },

      {
        title: "What is Coherence?",
        note: `Coherence is defined by the degree of correlation between electromagnetic fields. What most people don't 
      realize is that every single cell in your body emits a small, but measurable, electromagnetic field. 
      The human heart is the largest generator of this electromagnetic information in the body.
      Not only is it possible to learn to access this state of being, called coherence, 
      but doing so is key to activating your communication with the quantum field.
      We encourage you to check out the wide range of research and literature on heart-brain 
      coherence directly through the HeartMath Institute.`,
        id: "2",
      },

      {
        title: "What can i expect during my visit?",
        note: `Upon arrival, you will check-in at the front desk like you would at a spa. At the start of your appointment
       time, our clinical staff will escort you to the facility along with a maximum of 4 other clients.
      The HeartMath Quick Coherence Technique is an evidence-based intervention used in a variety of healthcare,
       business, and sports performance settings to promote stress reduction and relaxation. The technique is 
       designed to facilitate a shift into the state of being called coherent.
      `,
        id: "3",
      },

      {
        title: "What is Coherence?",
        note: `Coherence is defined by the degree of correlation between electromagnetic fields. What most people don't 
        realize is that every single cell in your body emits a small, but measurable, electromagnetic field. 
        The human heart is the largest generator of this electromagnetic information in the body.
        Not only is it possible to learn to access this state of being, called coherence, 
        but doing so is key to activating your communication with the quantum field.
        We encourage you to check out the wide range of research and literature on heart-brain 
        coherence directly through the HeartMath Institute.`,
        id: "4",
      },

      {
        title: "What is frequency therapy?",
        note: `All of our services incorporate evidence-based auditory frequency protocols known to facilitate 
      harmonization of the brain hemispheres, regulation of the nervous system, and bring your body-mind into a 
      state of deep relaxation. We have converted the floatation rooms into resonance chambers, whereby the sound 
      vibrates your entire biofield while effortlessly floating in ozone-purified salt water. whereby the sound 
      vibrates your entire biofield while effortlessly floating in ozone-purified salt water. 
      Hemisphere synchonization has been shown to enhance: `,
        id: "5",
      },

      {
        title: "What is Frequency REST?",
        note: `Floatation REST, or Reduced Environmental Stimulation Therapy, is quickly becoming the go-to treatment 
      for elite athletes and military special forces because of the many benefits for performance, recovery, and stress 
      release. Research on Floatation REST demonstrates it is an effective therapy for a variety of stress-related 
      disorders, rheumatoid arthritis, musculoskeletal disorders, and chronic pain. Floatation REST has also been 
      researched as an effective offering for people with anxiety, depression, addictions, and trauma.      
        `,
        id: "6",
      },
      {
        title: "What is Scalar Upgrade?",
        note: `This unique service is delivered using a plasma energy device, The Rasha, with a Base-12 frequency 
      collection that protects, enhances, and harmonizes the autonomic nervous system. This technology-assisted 
      service relieves stressors, transmutes negative habitual patterns, supports relaxation, cellular detoxification, 
      and healing from electro-smog and geopathic stress. Our frequency generating software empowers you to experience 
      cutting-edge resonance science for self-healing. Some benefits of this type of service may include:`,
        id: "7",
      },

      {
        title: "What is Epigenetics and what does this service do for my DNA?",
        note: `The study of epigenetics is the study of how your behaviors and environment can cause changes 
      that affect the way your genes work. Unlike genetic changes, epigenetic changes do not affect your DNA 
      sequence itself, but rather how that DNA sequence is read and encoded for health or disease.
      Think of our services as a spa treatment for your DNA, facilitating a harmonization of the electromagnetic 
      information within your biofield.`,
        id: "8",
      },

      {
        title: "Do you accept HSA/FSA cards or insurance?",
        note: `Quantum Clinic is a registered National Provider and we do accept HSA/FSA spending accounts like any 
      other form of payment. Just use your card at checkout as you would a regular debit or credit card and please email
       us if you encounter any difficulty (admin@quantumclinic.com). We do not currently work with insurance agencies
        directly for the reimbursement of our services, but we are working towards that and will provide updates here 
        when we become paneled with insurers.  You should also know that our organization is completely HIPAA compliant,
         including all the emails you receive from our team members. This means that any protected health information you
          share with us online or during your visit is confidential and secure.`,
        id: "9",
      },

      {
        title: "What should I bring?",
        note: ` You don't have to bring anything other than an open mind and heart with the intent to unplug and tune in.    
      You are welcome to bring a bathing suit if you feel more comfortable wearing one in the water, but it is not 
      required. Everyone is expected to shower both before and after their REST service. We recommend you bring your 
      journal, but we also provide a series of semi-structured prompts and materials for you following the service in 
      the event that you'd rather not bring one`,
        id: "10",
      },

      {
        title: "How long is each service?",
        note: ` The direct service is a standard 60-minute session. For planning purposes, we recommend that you block 
      off approximately two hours for your visit to ensure you get the most out of your experience.
      You are welcome to stay longer and enjoy our ample community spaces along the historic Los Angeles riverfront. 
      While the expressive arts lounge is a strictly “tech-free” space, any of the outdoor areas is perfect for those 
      wishing to dive into creative projects following your service.`,
        id: "11",
      },

      {
        title: "What if i freak out?",
        note: ` We understand that this is a new experience for many people, and it is normal to have some fear or 
      anxiety about what it will be like for you. The vast majority of our guests report feeling very relaxed and 
      supported while connecting with their own inner wisdom.
      There is no right or wrong way to feel during your service. If at any time you decide it's not for you, 
      that's okay. Our clinical staff are trauma-informed and culturally sensitive practitioners who are trained and
       experienced to support you no matter what`,
        id: "12",
      },

      {
        title: "Is there anything else I should understand before my visit?",
        note: ` 
      At Quantum Clinic, we believe that all healing is a result of empowerment and awareness building. People are 
      yearning for another way, and there is a major shift occurring in the collective at this time in our evolutionary 
      journey. This shift is akin to a remembrance, an awakening, rooted in an ancient understanding of the fundamental 
      interconnectedness of all things. Together, we are building a movement centered around radical reconnection. 
      With nature, with our own bodies, our intuition, and one another. The Quantum Clinic project was developed in 
      direct response to the overmedicalization (overdiagnosis and overtreatment) and iatrogenic harm that so many people
       experience in the prevailing healthcare system. It is important that you understand that Quantum Clinic is not 
       a licensed medical provider, nor are our services a substitute for acute medical care or supervision.
      We hold space for your deepest transformation and self-healing through coherence.`,
        id: "13",
      },
    ],
  });

  function clickHandler(id) {
    updateInfo((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === id ? { ...item, showNote: !item.showNote } : item
      ),
    }));
  }

  const [list, updateList] = useState([
    { title: "Buy a Phone", id: 1 },
    { title: "Buy a car", id: 2 },
    { title: "Buy a house", id: 3 },
  ]);

  const [valuee, updateValue] = useState("");
  function inputValue(value) {
    updateValue(value.target.value);
  }

  function clickHandler2() {
    updateList((prevList) => prevList.push(valuee));
  }

  return (
    <div className={style.faqs}>
      <div className={style.container}>
        <img src={firstImage} alt="sfs" />

        <h2> FREQUENTLY ASKED QUESTIONS (FAQs) </h2>

        <div className={style.infoTab}>
          {info.items.map((eachTab) => (
            <div className={style.eachInfoTab} key={eachTab.id}>
              <div
                className={style.noteHeader}
                onClick={() => clickHandler(eachTab.id)}
              >
                <h4 style={{ maxWidth: "65vw" }}> {eachTab.title}</h4>

                <h5> {eachTab.showNote ? "-" : "+"} </h5>
              </div>

              {eachTab.showNote && <p>{eachTab.note}</p>}
            </div>
          ))}
        </div>

        <Form />

        <div style={{ margin: " 30px 0" }}>
          <input onChange={inputValue} type="text" />
          <button onClick={clickHandler2}>submit</button>

          {list.map((eachList) => (
            <div key={eachList.id}>{eachList.title}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
