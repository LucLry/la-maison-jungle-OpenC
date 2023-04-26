import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

function ShoppingList() {
  const plantCategories = plantList.reduce((unique, item) => {
    return unique.includes(item.category) ? unique : [...unique, item.category];
  }, []);
  return (
    <>
      <ul>
        {plantCategories.map((cat, index) => (
          <li className="cat" key={`${cat}-${index}`}>
            {cat}
          </li>
        ))}
      </ul>
      <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>{plant.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
