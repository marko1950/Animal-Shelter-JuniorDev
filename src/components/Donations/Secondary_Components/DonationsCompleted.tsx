import Table from "./Table";
import style from "../../../styles/Donations.module.css";
const DonationsCompleted = ({ completedDonations }: any) => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className={style.donations_table_header}>
          <h3>Donated:</h3>
        </div>
        <Table donationType={completedDonations} type="Donated" />
      </div>
    </div>
  );
};

export default DonationsCompleted;
