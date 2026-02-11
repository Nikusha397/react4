import "./FoodCard.css";
import Title from "../../__atoms/Title/Title";
import Text from "../../__atoms/Text/Text";
import IconGroup from "../../__molecules/IconGroup/IconGroup";
import CaloriesInfo from "../../__molecules/CaloriesInfo/CaloriesInfo";
import PriceSection from "../../__molecules/PriceSection/PriceSection";

function FoodCard({ food }) {
  return (
    <div className="card">
      <img src={food.image} alt={food.title} className="card_image" />
<div className="card_content">
  <div className="title_icons_row">
    <Title>{food.title}</Title>
    <IconGroup icons={food.icons} />
  </div>

  <Text>{food.description}</Text>

  <CaloriesInfo
    calories={food.calories}
    pfc={food.pfc}
    temp={food.temp}
  />

  <PriceSection sale={food.sale} main={food.main} />
    </div>

    </div>
  );
}

export default FoodCard;
