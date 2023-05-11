import style from "../../../styles/Navbar.module.css";
import ShelterLogo from "../../../assets/Shelter_logo.png";
import "../../../styles/Checkbox.css";
import { useContext } from "react";
import { ShelterContext } from "../../Context";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const { Admin, setAdmin, setCreatedNews } = useContext(ShelterContext);

  const handleChange = () => {
    setAdmin(!Admin);
    setCreatedNews({
      title: "",
      text: "",
      important: false,
      date: "",
    });
  };

  return (
    <nav>
      <div className={style.nav_wrapper}>
        <img src={ShelterLogo} className={style.logo} />
        <div>
          <div className={style.buttons_div}>
            <div className={style.button_wrapper}>
              <Link to="/">
                {" "}
                <button className={style.navbar_button}>Home</button>
              </Link>
            </div>
            <div className={style.button_wrapper}>
              <Link to="/list">
                {" "}
                <button className={style.navbar_button}>List of animals</button>
              </Link>
            </div>
            <div className={style.button_wrapper}>
              <Link to="/donations">
                <button className={style.navbar_button}>Donations</button>
              </Link>
            </div>
            <div className={style.button_wrapper}>
              <Link to="/blog">
                <button className={style.navbar_button}>Blog</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={style.checkbox_wrapper}>
          <div className="checkbox-wrapper-10">
            <input
              className="tgl tgl-flip"
              id="cb5"
              type="checkbox"
              checked={Admin}
              onChange={handleChange}
            />
            <label
              className="tgl-btn"
              data-tg-off="User"
              data-tg-on="Admin"
              htmlFor="cb5"
            ></label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
