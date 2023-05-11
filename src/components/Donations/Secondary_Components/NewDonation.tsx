import { useState } from "react";
import style from "../../../styles/Donations.module.css";
import axios from "axios";
import { useContext } from "react";
import { ShelterContext } from "../../Context";
const NewDonation = () => {
  const { Admin, setNeededDonations, setGivenDonations } =
    useContext(ShelterContext);
  const [newDonation, setNewDonation] = useState({
    type: "",
    value: "",
    description: "",
  });
  const editChange = (event: any) => {
    const { name, value } = event.target;
    setNewDonation({ ...newDonation, [name]: value });
  };

  const UpdateNews = (event: any) => {
    event.preventDefault();
    if (Admin) {
      axios
        .post(" http://localhost:3001/donations-needed", newDonation)
        .then(() => {
          axios
            .get("http://localhost:3001/donations-needed")
            .then((rez): any => setNeededDonations(rez.data));
        });
    } else {
      axios
        .post(" http://localhost:3001/donations-given", newDonation)
        .then(() => {
          axios
            .get("http://localhost:3001/donations-given")
            .then((rez): any => setGivenDonations(rez.data));
        });
    }
  };

  return (
    <div className={style.newDonation_wrapper}>
      <form name="donation-form" onSubmit={UpdateNews}>
        <div className={style.new_donation_div}>
          <div className={style.new_donation_title}>
            <p>Type:</p>
            <input
              name="type"
              maxLength={20}
              required
              onChange={editChange}
              className={style.newdonations_input}
            />
          </div>
          <div className={style.new_donation_title}>
            <p>Value:</p>
            <input
              name="value"
              maxLength={4}
              required
              onChange={editChange}
              className={style.newdonations_input}
            />
          </div>
          <div className={style.new_donation_text}>
            <p>Description:</p>
            <textarea
              name="description"
              maxLength={20}
              onChange={editChange}
              className={style.newdonations_textarea}
            ></textarea>
          </div>
          <div className={style.donation_submit_button_div}>
            {Admin ? (
              <button className={style.donation_submit_button} type="submit">
                Request a Donation
              </button>
            ) : (
              <button className={style.donation_submit_button} type="submit">
                Send Donation
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewDonation;
