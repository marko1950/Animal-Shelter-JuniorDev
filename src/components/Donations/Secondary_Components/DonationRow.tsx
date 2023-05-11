import style from "../../../styles/Donations.module.css";
import axios from "axios";
import { useContext } from "react";
import { ShelterContext } from "../../Context";

const DonationRow = ({ donation, type }: any) => {
  const {
    Admin,
    setNeededDonations,
    setCompletedDonations,
    setGivenDonations,
  } = useContext(ShelterContext);

  const neededToDonated = () => {
    let donationToSend = {
      ...donation,
      id: Math.floor(Math.random() * (1000000 - 100) + 100),
    };
    axios
      .post("http://localhost:3001/donations-completed", donationToSend)
      .then(() =>
        axios
          .delete(`http://localhost:3001/donations-needed/${donation.id}`)
          .then(() => {
            Promise.all([
              axios.get("http://localhost:3001/donations-needed/"),
              axios.get("http://localhost:3001/donations-completed/"),
            ]).then(([neededResponse, completedResponse]) => {
              setNeededDonations(neededResponse.data);
              setCompletedDonations(completedResponse.data);
            });
          })
      );
  };

  const givenToDonated = () => {
    let donationToSend = {
      ...donation,
      id: Math.floor(Math.random() * (10000000 - 100) + 100),
    };
    axios
      .post("http://localhost:3001/donations-completed", donationToSend)
      .then(() => {
        axios
          .delete(`http://localhost:3001/donations-given/${donation.id}`)
          .then(() =>
            Promise.all([
              axios.get("http://localhost:3001/donations-given/"),
              axios.get("http://localhost:3001/donations-completed/"),
            ]).then(([givenResponse, completedResponse]) => {
              setGivenDonations(givenResponse.data);
              setCompletedDonations(completedResponse.data);
            })
          );
      });
  };

  const donatedToNeeded = () => {
    let donationToSend = {
      ...donation,
      id: Math.floor(Math.random() * (10000000 - 100) + 100),
    };
    axios
      .post("http://localhost:3001/donations-needed", donationToSend)
      .then(() => {
        axios
          .delete(`http://localhost:3001/donations-completed/${donation.id}`)
          .then(() =>
            Promise.all([
              axios.get("http://localhost:3001/donations-needed/"),
              axios.get("http://localhost:3001/donations-completed/"),
            ]).then(([neededResponse, completedResponse]) => {
              setNeededDonations(neededResponse.data);
              setCompletedDonations(completedResponse.data);
            })
          );
      });
  };

  const deleteThisNeededDonation = () => {
    axios
      .delete(`http://localhost:3001/donations-needed/${donation.id}`)
      .then(() => {
        axios
          .get("http://localhost:3001/donations-needed/")
          .then((response) => {
            setNeededDonations(response.data);
          });
      });
  };

  const deleteThisDonatedDonation = () => {
    axios
      .delete(`http://localhost:3001/donations-completed/${donation.id}`)
      .then(() => {
        axios
          .get("http://localhost:3001/donations-completed/")
          .then((response) => {
            setCompletedDonations(response.data);
          });
      });
  };

  return (
    <tr className={style.donation_row} key={donation.id}>
      <td>
        <p>{donation.type}</p>
      </td>
      <td>
        <p>{donation.value} €</p>
      </td>
      <td>
        <p>{donation.description}</p>
      </td>
      <td>
        {type === "Needed" && Admin ? (
          <div>
            {" "}
            <button
              onClick={neededToDonated}
              className={style.donation_accept_donation_button}
            >
              Donated
            </button>
            <button
              onClick={deleteThisNeededDonation}
              className={style.donation_deleteButton}
            >
              Delete
            </button>
          </div>
        ) : type === "Needed" && !Admin ? (
          <div>
            {" "}
            <button
              onClick={neededToDonated}
              className={style.donation_accept_donation_button}
            >
              Donate
            </button>
          </div>
        ) : type === "Donated" && Admin ? (
          <div>
            {" "}
            <button
              onClick={donatedToNeeded}
              className={style.donation_accept_donation_button}
            >
              {" "}
              Send Again
            </button>
            <button
              onClick={deleteThisDonatedDonation}
              className={style.donation_deleteButton}
            >
              Delete
            </button>
          </div>
        ) : type === "Donated" && !Admin ? (
          ""
        ) : type === "Given" && Admin ? (
          <button
            onClick={givenToDonated}
            className={style.donation_accept_donation_button}
          >
            Accept Donation
          </button>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
};

export default DonationRow;
