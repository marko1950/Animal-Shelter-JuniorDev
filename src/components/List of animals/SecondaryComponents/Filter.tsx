import style from "../../../styles/Filter.module.css";
import { useContext } from "react";
import { ShelterContext } from "../../Context";

const Filter = () => {
  const animalStatusOptions: string[] = ["All", "Adopted", "Not adopted"];

  const animalTypeOptions: string[] = ["All", "Dog", "Cat"];

  const { filterOption, setFilterOption } = useContext(ShelterContext);

  const handleChange1 = (event: any) => {
    const newObject = { ...filterOption };
    newObject.Status = event.target.value;
    setFilterOption(newObject);
  };
  const handleChange2 = (event: any) => {
    const newObject = { ...filterOption };
    newObject.Type = event.target.value;
    setFilterOption(newObject);
  };

  return (
    <div className={style.filter_wrapper}>
      <div>
        <h3>Filter:</h3>
      </div>
      <div className={style.filter_div}>
        <div className={style.filter_title}>
          <h4>Type:</h4>
        </div>
        <div className={style.radio_wrapper}>
          {" "}
          {animalTypeOptions.map((option: any) => {
            return (
              <div className={style.filterOptions} key={option}>
                <input
                  type="radio"
                  id={option}
                  name="filter2"
                  value={option}
                  checked={filterOption["Type"] === option}
                  onChange={handleChange2}
                  className={style.filter_input}
                />
                <label>{option}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.filter_div}>
        <div className={style.filter_title}>
          <h4>Status:</h4>
        </div>
        {animalStatusOptions.map((option: any) => {
          return (
            <div className={style.filterOptions} key={option}>
              <input
                type="radio"
                id={option}
                name="filter1"
                value={option}
                checked={filterOption["Status"] === option}
                onChange={handleChange1}
                className={style.filter_input}
              />
              <label className={style.fitler_label}>{option}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
