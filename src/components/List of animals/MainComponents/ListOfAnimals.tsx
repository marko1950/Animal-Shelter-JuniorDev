import Table from "../SecondaryComponents/Table";
import Filter from "../SecondaryComponents/Filter";
import style from "../../../styles/AnimalCard.module.css";
import { useContext } from "react";
import { ShelterContext } from "../../Context";
import NewAnimalCard from "../SecondaryComponents/NewAnimalCard";

const ListOfAnimals = () => {
  const { Admin } = useContext(ShelterContext);
  return (
    <div>
      {" "}
      <h2 className={style.list_heading}>Welcome to our Shelter!</h2>
      <p className={style.list_opening_paragraph}>
        Meet our four legged friends. For some of them we are their only family
        and for some one them we are just one of many families. We take care for
        about 10-20 dogs and cats, part of them are in the Shelter and the rest
        are in temporary homes. We take care about the weak, work with
        frightened or traumatized, and prepare them for their Forever homes. For
        the once too old and unwanted our shelter is the place in which they can
        live loved and safe untill the very end. All animals in Shelter are
        microchipped, vaccinated, neutered/spayed and have EU passport.
      </p>
      {Admin && (
        <div className={style.new_animal_div_wrapper}>
          <div className={style.new_animal_question_wrapper}>
            <h4>Oh, we got a new member?</h4>
            <p>Show him around the shelter! </p>
          </div>
          <div>
            <NewAnimalCard />
          </div>
        </div>
      )}
      <div className={style.list_header}>
        <h3>Buddies to Adopt:</h3>
      </div>
      <Filter />
      <Table />
    </div>
  );
};

export default ListOfAnimals;
