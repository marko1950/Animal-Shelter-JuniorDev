import style from "../../../styles/Donations.module.css";
import Table from "./Table";
const DonationsNeeded = ({ neededDonations }: any) => {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <div className={style.donations_table_header}>
          <h3>Donations Needed:</h3>
        </div>
        <Table donationType={neededDonations} type="Needed" />
      </div>
    </div>
  );
};

export default DonationsNeeded;
