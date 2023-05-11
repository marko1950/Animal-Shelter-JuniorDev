import DonationsCompleted from "../Secondary_Components/DonationsCompleted";
import { useEffect } from "react";
import axios from "axios";
import style from "../../../styles/Donations.module.css";
import DonationsNeeded from "../Secondary_Components/DonationsNeeded";
import DonationsGiven from "../Secondary_Components/DonationsGiven";
import NewDonation from "../Secondary_Components/NewDonation";
import woman_dog from "../../../assets/woman_dog.png";
import { useContext } from "react";
import { ShelterContext } from "../../Context";

const Donations = () => {
  const {
    Admin,
    neededDonations,
    setNeededDonations,
    givenDonations,
    setGivenDonations,
    completedDonations,
    setCompletedDonations,
  } = useContext(ShelterContext);

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/donations-needed/"),
      axios.get("http://localhost:3001/donations-given/"),
      axios.get("http://localhost:3001/donations-completed/"),
    ]).then(([neededResponse, givenResponse, completedResponse]) => {
      setNeededDonations(neededResponse.data);
      setGivenDonations(givenResponse.data);
      setCompletedDonations(completedResponse.data);
    });
  }, []);

  return (
    <div>
      {" "}
      <div className={style.newDonations_header_div}>
        <div className={style.newDonations_header}>
          <h2>How your donation makes a difference ?</h2>
          <p>
            It is your donation that enables us to actively keep campaigning for
            animals in need and improving animal welfare standards worldwide.
            Specifically, you can see how your donation contributes towards the
            betterment and welfare of animals.
          </p>
          <div>
            <img src={woman_dog} />
          </div>
        </div>
        <div className={style.newDonations_form_wrapper}>
          {" "}
          {Admin ? (
            <h4>Write a request for a donation here!</h4>
          ) : (
            <h4>Contribute to a better world for animals here!</h4>
          )}
          <NewDonation />
        </div>
      </div>
      <div className={style.donations_section}>
        <DonationsNeeded
          neededDonations={neededDonations}
          setNeededDonations={setNeededDonations}
        />
        <DonationsGiven
          givenDonations={givenDonations}
          setGivenDonations={givenDonations}
        />
        <DonationsCompleted
          completedDonations={completedDonations}
          setCompletedDonations={setCompletedDonations}
        />
      </div>
    </div>
  );
};

export default Donations;
