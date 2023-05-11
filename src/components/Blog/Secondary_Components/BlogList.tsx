import News from "./News";
import style from "../../../styles/Blog.module.css";
import no_news from "../../../assets/no_news.jpg";

const BlogList = ({ allNews, setAllNews }: any) => {
  return (
    <div>
      <div className={style.blog_news_div}>
        <h2>Read the news here:</h2>
        {allNews.length === 0 && (
          <div className={style.blog_noNews_div}>
            <img src={no_news} />
          </div>
        )}
        {allNews.map((news: any) => {
          return <News key={news.id} news={news} setAllNews={setAllNews} />;
        })}
      </div>
    </div>
  );
};

export default BlogList;
