import TestPoint from "../../assets/images/testpoint.png";

function TestItem(props) {
  const { text, onSelect, selectedValue } = props;
  const options = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="columnContainer">
      <p className="normalText-test">{text}</p>
      <div className="mainContent">
        <div className="normalText-test2">Agree</div>
        {options.map((value) => (
          <img
            key={value}
            className={`point_img ${selectedValue === value ? "selected" : ""}`}
            src={TestPoint}
            style={{
              width: `${value <= 4 ? 7 - value : value}vw`,
            }}
            onClick={() => onSelect(value)}
            alt="Test Point"
          />
        ))}
        <div className="normalText-test2">Disagree</div>
      </div>
    </div>
  );
}

export default TestItem;
