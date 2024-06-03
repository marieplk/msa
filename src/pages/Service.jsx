import CardButtonArticle3 from "../components/Cards/CardButtonArticle3";
import CardButtonArticle4 from "../components/Cards/CardButtonArticle4";

const Service = () => {
  return (
    <div className="dualContainer">
      <div className="dualContainerTop">
        <h1>УСЛУГИ</h1>
        <p>
          Не&nbsp;откладывайте визит, если у&nbsp;вас есть какие-либо
          беспокойства или вопросы по&nbsp;поводу здоровья вашего ребенка.
        </p>
      </div>
      <div className="dualContainerBottom">
        <CardButtonArticle3 /> <CardButtonArticle4 />
      </div>
    </div>
  );
};

export default Service;
