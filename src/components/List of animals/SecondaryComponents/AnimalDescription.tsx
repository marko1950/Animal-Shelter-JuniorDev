import style from "../../../styles/AnimalCard.module.css";
import SelectionInput from "./SelectionInput";
import { useContext } from "react";
import { ShelterContext } from "../../Context";

const animalTypes: string[] = ["Dog", "Cat"];
const animalStatus: string[] = ["Adopted", "Not adopted"];
const animalYears: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

const AnimalDescription = ({ animal, edit }: any) => {
  const { changedOptions, setChangedOptions } = useContext(ShelterContext);

  const editChange = (event: any) => {
    const { name, value } = event.target;
    setChangedOptions({ ...changedOptions, [name]: value });
  };

  return (
    <div className={style.animal_description_div_wrapper}>
      {!edit ? (
        <div className={style.animal_description}>
          <p>
            <b>Name: </b>
            {animal.name}
          </p>
          <p>
            {" "}
            <b>Type:</b> {animal.type}
          </p>
          <p>
            {" "}
            <b>Breed: </b>
            {animal.breed}
          </p>
          <p>
            {" "}
            <b>Years old:</b> {animal.old}
          </p>
          {animal.status === "Adopted" ? (
            <p className={style.adopted_p}>
              {" "}
              <b>Status:</b> {animal.status}
            </p>
          ) : (
            <div>
              {" "}
              <p className={style.not_adopted_p}>
                <b>Status:</b> {animal.status}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className={style.animal_description}>
          <div className={style.animal_description_input_div}>
            <b>Name:&nbsp;</b>
            <input
              type="text"
              name="name"
              value={changedOptions.name}
              onChange={editChange}
              className={style.newAnimal_input}
              maxLength={15}
            />
          </div>
          <div className={style.animal_description_input_div}>
            {" "}
            <b>Type:&nbsp;</b>
            <SelectionInput
              options={animalTypes}
              name="types"
              action={editChange}
              defaultValue={animal.type}
            />
          </div>{" "}
          <div className={style.animal_description_input_div}>
            <b>Breed:&nbsp;</b>
            <input
              type="text"
              name="breed"
              value={changedOptions.breed}
              onChange={editChange}
              className={style.newAnimal_input}
              maxLength={15}
            />
          </div>
          <div className={style.animal_description_input_div}>
            <b>Years old:&nbsp;</b>{" "}
            <SelectionInput
              options={animalYears}
              name="old"
              action={editChange}
              defaultValue={animal.old}
            />
          </div>
          <div className={style.animal_description_input_div}>
            <b>Status:&nbsp;</b>{" "}
            <SelectionInput
              options={animalStatus}
              name="status"
              action={editChange}
              defaultValue={animal.status}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimalDescription;
