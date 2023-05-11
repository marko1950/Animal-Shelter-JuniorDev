import style from "../../../styles/LandingPage.module.css";
import happyDog from "../../../assets/happy_dog.jpg";
import Services from "../../../assets/Services.png";
import ContactForm from "./ContactForm";
import dogIMG from "../../../assets/confused__dog.png";
const LandingPage = () => {
  return (
    <div>
      <div className={style.mission}>
        <div className={style.mission_div}>
          <h1>Our Mission</h1>
          <p>
            We take in rescued cats and dogs, provide medical treatment,
            nutrition, and shelter in a safe, live release facility until they
            are matched with their forever families. Through community education
            and empowerment, we advocate for truly responsible pet ownership.
          </p>
          <p>
            Supported by contributions and directed by a volunteer board, the
            League provides programs and services which strengthen the bond
            between animals and people. Through grassroots advocacy, education
            and rescue, the organization is the leading voice for dogs and cats
            in crisis.
          </p>
          <div className={style.services_div}>
            <h2>Services we provide:</h2>
            <img src={Services} />
            <div className={style.quote_div}>
              <blockquote>
                {" "}
                <q className={style.quote}>
                  &nbsp; There is no psychiatrist in the world like a puppy
                  licking your face.&nbsp;{" "}
                </q>
                <br></br>- Ben Williams
              </blockquote>
            </div>
          </div>
        </div>
        <div className={style.happyDog_div}>
          <img src={happyDog} className={style.happyDog_image} />
          <div className={style.map_div}>
            {" "}
            <h4>Where to find us:</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177839.1613103979!2d15.823890925137507!3d45.85656476628153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47667a3e84c1ac3f%3A0xe12d3c8368991117!2sSkloni%C5%A1te%20za%20nezbrinute%20%C5%BEivotinje%20Grad%20Zagreba!5e0!3m2!1shr!2shr!4v1683067242152!5m2!1shr!2shr"
              width="90%"
              height="250"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className={style.landing_form_section}>
        <div className={style.form_div_wrapper}>
          <h3>Contact form</h3>
          <ContactForm />
        </div>
        <div className={style.form_question_div}>
          <h2>Got any questions?</h2>
          <p>Feel free to asks us anything!</p>
          <div>
            <img src={dogIMG} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
