import style from "../../../styles/Blog.module.css";
import axios from "axios";
import { useContext } from "react";
import { ShelterContext } from "../../Context";

const CreateBlog = ({ createdNews, setCreatedNews, setAllNews }: any) => {
  const { sortNewsByDate, Admin } = useContext(ShelterContext);

  const editChange = (event: any) => {
    const { name, value } = event.target;
    setCreatedNews({ ...createdNews, [name]: value });
  };

  const handleChange = () => {
    const newObject = { ...createdNews };
    newObject.important = !createdNews.important;
    setCreatedNews(newObject);
  };

  const getDate = () => {
    let newDate = new Date().toLocaleDateString();
    const newObject = { ...createdNews };
    newObject.date = newDate;
    setCreatedNews(newObject);
  };

  const UpdateNews = (event: any) => {
    event.preventDefault();
    axios.post(" http://localhost:3001/news", createdNews).then(() => {
      axios
        .get("http://localhost:3001/news")
        .then((rez): any => setAllNews(sortNewsByDate(rez.data)));
    });
  };

  return (
    <form name="news-form" onSubmit={UpdateNews}>
      <div className={style.new_blog_div}>
        <div className={style.new_blog_title}>
          <p>Title:</p>
          <input
            name="title"
            maxLength={20}
            required
            onChange={editChange}
            value={createdNews.title}
            className={style.createBlog_input}
          />
        </div>
        <div className={style.new_blog_text}>
          <p>Text:</p>
          <textarea
            name="text"
            minLength={10}
            maxLength={200}
            required
            onChange={editChange}
            value={createdNews.text}
            className={style.createBlog_textarea}
          ></textarea>
        </div>
        <div>
          <div className={style.new_blog_buttons}>
            {" "}
            <div className={style.new_blog_checkbox_div}>
              <input
                name="important"
                type="checkbox"
                onChange={handleChange}
                value={createdNews.important}
                checked={createdNews.important}
                disabled={!Admin}
              />{" "}
              <p>
                <b>&nbsp;Important</b>
              </p>
            </div>
            <button
              className={style.blog_submit_button}
              type="submit"
              onClick={() => {
                getDate();
              }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateBlog;
