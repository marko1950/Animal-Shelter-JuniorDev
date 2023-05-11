import DonationRow from "./DonationRow";
import style from "../../../styles/Donations.module.css";

const Table = ({ donationType, type }: any) => {
  return (
    <div className={style.donation_table_div}>
      {" "}
      <table className={style.donations_table}>
        <thead className={style.donations_thead}>
          <tr>
            <th>
              <p>Type</p>
            </th>
            <th>
              {" "}
              <p>Value</p>
            </th>
            <th>
              {" "}
              <p>Description</p>
            </th>
            <th>
              {" "}
              <p>Options</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {donationType.map((donation: any) => {
            return (
              <DonationRow donation={donation} type={type} key={donation.id} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
