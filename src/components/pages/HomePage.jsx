import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Allnews from "./News/Allnews";
const HomePage = () => {
  const [news, setNews] = useState([""]);

  useEffect(() => {
    showNews();
  }, []);

  const showNews = async () => {
    const result = await axios.get("http://localhost:3001/news");
    console.log(result.data);
    setNews(result.data);
  };
  return (
    <section>
        <Allnews news={news} />
    </section>
  );
};

export default HomePage;
