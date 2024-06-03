import { useEffect, useState } from "react";
import Button from "../Button/Button";
import ButtonRound from "../Button/ButtonRound";
import styles from "./articles.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticleIndex, setCurrentArticleIndex] = useState(0);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const articlesCollection = collection(db, "articles");
      const response = await getDocs(articlesCollection);

      const articlesData = response.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setArticles(articlesData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleArticleClick = (index) => {
    setCurrentArticleIndex(index);
  };

  const handleNextArticle = () => {
    setCurrentArticleIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrevArticle = () => {
    setCurrentArticleIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  return (
    <div className={styles.blog}>
      <div className={styles.blogFilter}>
        {articles.map((art, index) => (
          <Button key={art.id} onClick={() => handleArticleClick(index)}>
            {art.data.title}
          </Button>
        ))}
      </div>

      <div className={styles.blogText}>
        {articles.length > 0 && (
          <div>
            <h1>{articles[currentArticleIndex].data.title}</h1>
            <h3>{articles[currentArticleIndex].data.desc}</h3>
            <p>{articles[currentArticleIndex].data.content}</p>
            <p>Автор: {articles[currentArticleIndex].data.author}</p>
          </div>
        )}
      </div>

      <div className={styles.blogNav}>
        <ButtonRound onClick={handlePrevArticle}>
          <b>ᐸ</b>
        </ButtonRound>
        <ButtonRound onClick={handleNextArticle}>
          <b>ᐳ</b>
        </ButtonRound>
      </div>
    </div>
  );
};

export default Articles;
