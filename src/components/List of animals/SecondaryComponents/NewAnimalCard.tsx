import style from "../../../styles/AnimalCard.module.css";
import SelectionInput from "./SelectionInput";
import { useState, useRef } from "react";
import image_placeholder from "../../../assets/dog_question.jpg";
import axios from "axios";
import { useContext } from "react";
import { ShelterContext } from "../../Context";

const animalTypes: string[] = ["Dog", "Cat"];
const animalStatus: string[] = ["Not adopted", "Adopted"];
const animalYears: number[] = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

const NewAnimalCard = () => {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    type: "Dog",
    breed: "",
    old: "1",
    status: "Not adopted",
    image: image_placeholder,
    description: "",
  });

  const { setAnimalsInShelter, setAdmin, Admin, takeAnimalsIds } =
    useContext(ShelterContext);

  const addNewAnimal = (event: any) => {
    event.preventDefault();
    axios.post("http://localhost:3001/animals/", newAnimal).then(() => {
      axios.get(`http://localhost:3001/animals/`).then((response) => {
        setAnimalsInShelter(response.data);
        takeAnimalsIds(response.data);
      });
    });
  };

  const editChange = (event: any) => {
    const { name, value } = event.target;
    setNewAnimal({ ...newAnimal, [name]: value });
  };
  return (
    <div>
      <div>
        <form name="new-animal" onSubmit={addNewAnimal}>
          <div className={style.animalCard}>
            <div className={style.animal_description_wrapper}>
              <div className={style.animal_image_div}>
                <img className={style.animal_image} src={newAnimal.image} />
              </div>
              <div className={style.animal_description}>
                <div className={style.animal_description_input_div}>
                  <b>Name:&nbsp;</b>
                  <input
                    type="text"
                    name="name"
                    value={newAnimal.name}
                    onChange={editChange}
                    className={style.newAnimal_input}
                    required
                  />
                </div>
                <div className={style.animal_description_input_div}>
                  {" "}
                  <b>Type:&nbsp;</b>
                  <SelectionInput
                    options={animalTypes}
                    name="type"
                    action={editChange}
                    //   defaultValue={animal.type}
                  />
                </div>{" "}
                <div className={style.animal_description_input_div}>
                  <b>Breed:&nbsp;</b>
                  <input
                    type="text"
                    name="breed"
                    value={newAnimal.breed}
                    onChange={(event) => editChange(event)}
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
                  />
                </div>
                <div className={style.animal_description_input_div}>
                  <b>Status:&nbsp;</b>{" "}
                  <SelectionInput
                    options={animalStatus}
                    name="status"
                    action={editChange}
                  />
                </div>
              </div>
            </div>
            <div className={style.animal_text}>
              <label>
                <b>Description:</b>
              </label>
              <textarea
                className={style.text_area}
                name="description"
                value={newAnimal.description}
                onChange={editChange}
                maxLength={50}
              >
                ejj
              </textarea>
            </div>
            <div className={style.adoptbuttons_div}>
              {" "}
              <p className={style.imageURL_p}>
                <b>ImageURL:&nbsp;</b>
              </p>{" "}
              <input
                type="text"
                name="image"
                onChange={editChange}
                className={style.new_animal_imgURL_input}
              />
              <button type="submit" className={style.new_animal_save_button}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAnimalCard;
