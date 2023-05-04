import { plantList } from "../datas/plantList";

const Categories = ({ setPlantListFiltered }) => {
  const categoriesList = [...new Set(plantList.map((e) => e.category))];
  return (
    <div>
      <select
        id="categorieSelect"
        onChange={(e) => {
          if (e.target.value === "") {
            setPlantListFiltered([...plantList]);
          } else {
            setPlantListFiltered(
              [...plantList].filter(
                (plant) => plant.category === e.target.value
              )
            );
          }
        }}
      >
        <option id="empty" value="">
          Toutes les catégories
        </option>
        {categoriesList.map((categorie) => (
          <option id={categorie} value={categorie}>
            {categorie}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
