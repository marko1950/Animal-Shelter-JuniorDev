import style from "../../../styles/AnimalCard.module.css";
import { useContext, useState } from "react";
import { ShelterContext } from "../../Context";
import AnimalDescription from "./AnimalDescription";
import axios from "axios";

const AnimalCard = ({ animal }: any) => {
  const {
    Admin,
    setAnimalsInShelter,
    changedOptions,
    setChangedOptions,

    editable,
    setEditable,
  } = useContext(ShelterContext);
  const [edit, setEdit] = useState(false);

  const handleChange = (status: string) => {
    axios
      .patch(`http://localhost:3001/animals/${animal.id}`, {
        status: status,
      })
      .then(() => {
        axios.get(`http://localhost:3001/animals/`).then((rez) => {
          setAnimalsInShelter(rez.data);
        });
      });
  };
  const saveChange = () => {
    axios
      .patch(`http://localhost:3001/animals/${animal.id}`, {
        name: changedOptions?.name,
        type: changedOptions?.type,
        breed: changedOptions?.breed,
        old: changedOptions?.old,
        status: changedOptions?.status,
        image: changedOptions?.image,
        description: changedOptions?.description,
      })
      .then(() => setEdit(false))
      .then(() => {
        return axios.get("http://localhost:3001/animals");
      })
      .then((rez) => setAnimalsInShelter(rez.data));
  };
  const removeAnimal = () => {
    axios.delete(`http://localhost:3001/animals/${animal.id}`).then(() => {
      axios
        .get("http://localhost:3001/animals")
        .then((rez) => setAnimalsInShelter(rez.data));
    });
  };

  const textChange = (event: any) => {
    const { name, value } = event.target;
    setChangedOptions({ ...changedOptions, [name]: value });
  };

  return (
    <div>
      <div key={animal.id} className={style.animalCard}>
        <div className={style.animal_description_wrapper}>
          <div className={style.animal_image_div}>
            <img className={style.animal_image} src={animal.image} />
          </div>
          <AnimalDescription animal={animal} edit={edit} />
        </div>

        <div className={style.animal_text}>
          <label>
            <b>Description:</b>
          </label>
          {edit ? (
            <textarea
              className={style.text_area}
              name="description"
              value={changedOptions.description}
              onChange={textChange}
              maxLength={50}
            ></textarea>
          ) : (
            <textarea
              readOnly
              className={style.text_area}
              value={animal.description}
              name="description2"
              maxLength={50}
            ></textarea>
          )}
        </div>
        <div className={style.adoptbuttons_div}>
          {" "}
          <button
            onClick={() => handleChange("Adopted")}
            className={style.animal_card_adopt_button}
          >
            Adopt me
          </button>
          {edit ? (
            <div className={style.animal_card_2buttons_div}>
              {" "}
              <button
                onClick={() => {
                  saveChange();
                  // setNonSelectedIds([]);
                  setEditable(false);
                  setEdit(false);
                }}
                disabled={!Admin}
                className={style.animal_card_save_button}
              >
                Save
              </button>
              <button
                onClick={() => {
                  removeAnimal();
                }}
                disabled={!Admin}
                className={style.animal_card_remove_button}
              >
                Remove
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setEdit(true);
                setChangedOptions({ ...animal });
              }}
              // disabled={!Admin || nonSelectedIds.includes(animal.id)}
              disabled={!Admin}
              className={style.animal_card_edit_button}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
