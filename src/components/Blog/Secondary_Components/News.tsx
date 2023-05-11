import style from "../../../styles/Blog.module.css";
import { useContext } from "react";
import { ShelterContext } from "../../Context";
import axios from "axios";

const News = ({ news, setAllNews }: any) => {
  const { Admin, sortNewsByDate } = useContext(ShelterContext);

  const deleteNews = () => {
    axios
      .delete(`http://localhost:3001/news/${news.id}`)
      .then(() =>
        axios
          .get("http://localhost:3001/news")
          .then((rez): any => setAllNews(sortNewsByDate(rez.data)))
      );
  };

  return (
    <div className={style.blog_news}>
      <div className={style.news_title_div}>
        <div className={style.news_title}>
          {" "}
          <h4>{news.title}</h4>
          {news.important && (
            <h4 className={style.news_title_important}>&nbsp;(Important)</h4>
          )}
        </div>
        {Admin && (
          <button
            className={style.news_deleteButton}
            onClick={() => deleteNews()}
          >
            Delete
          </button>
        )}
      </div>
      <div className={style.news_text_div}>
        <p className={style.news_text_p}>{news.text}</p>
        <div className={style.news_text_date}>
          <p>
            <b>Date Created:</b> {news.date}
          </p>
          <div className={style.blog_delete_button_div}></div>
        </div>
      </div>
    </div>
  );
};

export default News;
