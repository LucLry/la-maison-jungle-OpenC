import sunLogo from "../assets/sun.svg";
import waterLogo from "../assets/water.svg";

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType = careType === "light" ? sunLogo : waterLogo;

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            src={scaleType}
            alt={careType === "light" ? "light" : "water"}
          />
        ) : null
      )}
    </div>
  );
}

export default CareScale;
