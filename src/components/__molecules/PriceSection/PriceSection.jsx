import "./PriceSection.css";
import Button from "../../__atoms/Button/Button";

function PriceSection({ sale, main }) {
  return (
    <div className="price_section">
      <div className="prices">
        <p className="sale">{sale}</p>
        <p className="main">{main}</p>
      </div>
      <Button>ORDER</Button>
    </div>
  );
}

export default PriceSection;
