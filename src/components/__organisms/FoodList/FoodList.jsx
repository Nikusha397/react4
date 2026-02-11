import "./FoodList.css";
import FoodCard from "../FoodCard/FoodCard";

import pizza from "../../../assets/images/pizza.jpg";
import tortellini from "../../../assets/images/tortellini.jpg";
import cake from "../../../assets/images/sweets.jpg";

function FoodList() {
  const foods = [
    {
      id: 1,
      title: "Pepperoni Pizza",
      image: pizza,
      description:
        "Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.",
      calories: "265cal",
      pfc: "P/F/C: 12/10/31",
      temp: "53.8 °C",
      sale: "$23.90",
      main: "$29.90",
      icons: ["fire", "wheat"],
    },
    {
      id: 2,
      title: "Tortellini",
      image: tortellini,
      description:
        "Pasta stuffed with beef and pork topped with cream sauce.",
      calories: "270cal",
      pfc: "P/F/C: 18/4/41",
      temp: "42.4 °C",
      sale: "$17.90",
      main: "$22.90",
      icons: ["leaf", "fire", "wheat"],
    },
    {
      id: 3,
      title: "Strawberry Cake",
      image: cake,
      description:
        "Three layer strawberry dessert is beautiful and delicious.",
      calories: "346cal",
      pfc: "P/F/C: 6/14/49",
      temp: "13.9 °C",
      sale: "$13.90",
      main: "$18.90",
      icons: ["wheat"],
    },
  ];

  return (
    <div className="food_list">
      {foods.map((food) => (
        <FoodCard key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
