import "./CaloriesInfo.css";

function CaloriesInfo({ calories, pfc, temp }) {
  return (
    <div className="calories">
      <p>{calories}</p>
      <p>{pfc}</p>
      <p>{temp}</p>
    </div>
  );
}

export default CaloriesInfo;
