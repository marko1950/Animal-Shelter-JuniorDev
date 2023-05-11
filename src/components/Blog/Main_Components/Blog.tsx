import style from "../../../styles/Blog.module.css";
import CreateBlog from "../Secondary_Components/CreateBlog";
import BlogList from "../Secondary_Components/BlogList";
import { useState, useEffect } from "react";
import dog_writting from "../../../assets/dog_writting.jpg";
import axios from "axios";
import { useContext } from "react";
import { ShelterContext } from "../../Context";

const Blog = () => {
  const { sortNewsByDate, createdNews, setCreatedNews } =
    useContext(ShelterContext);

  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/news")
      .then((rez): any => setAllNews(sortNewsByDate(rez.data)));
  }, []);
  console.log(allNews);

  return (
    <div>
      <div className={style.blog_creation_div}>
        <div>
          <h2>Create a new Post:</h2>
          <div className={style.blog_creation_image_div}>
            <img src={dog_writting} />
          </div>
        </div>
        <div>
          <CreateBlog
            setCreatedNews={setCreatedNews}
            createdNews={createdNews}
            setAllNews={setAllNews}
          />
        </div>
      </div>
      )
      <div className={style.bloglist_div}>
        <BlogList setAllNews={setAllNews} allNews={allNews} />
      </div>
    </div>
  );
};

export default Blog;
