import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span
            onClick={() => displayCare(scaleValue, careType)}
            key={rangeElem.toString()}
          >
            {scaleType}
          </span>
        ) : null
      )}
    </div>
  );
}

function displayCare(scaleValue, careType) {
  let scaleValueString = null;
  let careTypeString = null;

  switch (scaleValue) {
    case 1:
      scaleValueString = "peu";
      break;
    case 2:
      scaleValueString = "modérement";
      break;
    case 3:
      scaleValueString = "beaucoup";
      break;
    default:
      return null;
  }
  if (careType === "water") {
    careTypeString = "d'arrosage";
  } else if (careType === "light") {
    careTypeString = "de lumière";
  } else {
    careTypeString = null;
  }

  if (!(careTypeString === null || scaleValueString === null)) {
    alert(
      "Cette plante requiert " +
        scaleValueString +
        " " +
        careTypeString +
        "\n\nCare de type " +
        careType
    );
  } else {
    alert("manque des infos");
  }
}

export default CareScale;
