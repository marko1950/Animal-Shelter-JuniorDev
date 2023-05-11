import { useEffect, useContext } from "react";
import axios from "axios";
import { ShelterContext } from "../../Context";
import AnimalCard from "./AnimalCard";
import style from "../../../styles/AnimalCard.module.css";
import pas_gleda from "../../../assets/pas_gleda.png";

const Table = () => {
  const {
    animalsInShelter,
    setAnimalsInShelter,
    filterOption,
    takeAnimalsIds,
  } = useContext(ShelterContext);

  const typeFilter = filterOption.Type === "All" ? "" : filterOption.Type;
  const statusFilter = filterOption.Status === "All" ? "" : filterOption.Status;

  const url =
    typeFilter && statusFilter
      ? `http://localhost:3001/animals?type=${typeFilter}&&status=${statusFilter}`
      : statusFilter
      ? `http://localhost:3001/animals?status=${statusFilter}`
      : typeFilter
      ? `http://localhost:3001/animals?type=${typeFilter}`
      : `http://localhost:3001/animals`;

  useEffect(() => {
    axios.get(url).then((res) => {
      setAnimalsInShelter(res.data);
      takeAnimalsIds(res.data);
    });
  }, [filterOption]);

  console.log("animals in shel", animalsInShelter.length);

  return (
    <div>
      <div className={style.table}>
        <div className={style.animal_table}>
          {animalsInShelter.map((animal: any) => {
            return <AnimalCard animal={animal} key={animal.id} />;
          })}
        </div>
        {animalsInShelter.length === 0 ? (
          <div className={style.noAnimals_div}>
            <img src={pas_gleda} />{" "}
            <h3 className={style.noAnimals_h3}>Sorry pal, no one's here...</h3>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Table;
