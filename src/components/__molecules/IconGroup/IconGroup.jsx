import "./IconGroup.css";

import fire from "../../../assets/icons/fire.svg";
import wheat from "../../../assets/icons/wheat.svg";
import leaf from "../../../assets/icons/leaf.svg";

const iconMap = {
  fire: { src: fire, bg: "red" },
  wheat: { src: wheat, bg: "#ffc22b" },
  leaf: { src: leaf, bg: "green" },
};

function IconGroup({ icons }) {
  return (
    <div className="icon_group">
      {icons.map((type, index) => {
        const icon = iconMap[type];

        return (
          <div
            key={index}
            className="icon_circle"
            style={{ backgroundColor: icon.bg }}
          >
            <img src={icon.src} alt={type} />
          </div>
        );
      })}
    </div>
  );
}

export default IconGroup;
