import style from "../../../styles/Donations.module.css";
import Table from "./Table";
const DonationsGiven = ({ givenDonations }: any) => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className={style.donations_table_header}>
          {" "}
          <h3>Gifted Donations:</h3>
        </div>
        <Table donationType={givenDonations} type="Given" />
      </div>
    </div>
  );
};

export default DonationsGiven;
