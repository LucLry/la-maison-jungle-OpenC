import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function PlantItem(props) {
  const { name, cover, id, light, water } = props;
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      {cover && (
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={"picture of " + name}
        />
      )}
      {name}
      <CareScale careType="water" scaleValue={water} />
      <CareScale careType="light" scaleValue={light} />
    </li>
  );
}

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`);
}

export default PlantItem;
