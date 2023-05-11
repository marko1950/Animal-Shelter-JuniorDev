import style from "../../../styles/AnimalCard.module.css";

const SelectionInput = (props: any) => {
  const handleChange = (event: any) => {
    props.action(event);
  };
  return (
    <div>
      <select
        name={props.name}
        onChange={handleChange}
        defaultValue={props.defaultValue}
        className={style.selectInput}
      >
        {props.options.map((option: any) => {
          return (
            <option key={option} id={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectionInput;
