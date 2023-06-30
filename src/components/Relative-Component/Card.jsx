import ArrowDownwardTwoToneIcon from "@mui/icons-material/ArrowDownwardTwoTone";
import ArrowUpwardTwoToneIcon from "@mui/icons-material/ArrowUpwardTwoTone";

const Card = ({ title, number, description }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="value">
        <div className="icon-area">
          {number > 5600 ? (
            <span className="icon up-arrow">{<ArrowUpwardTwoToneIcon />}</span>
          ) : (
            <span className="icon down-arrow">
              {<ArrowDownwardTwoToneIcon />}
            </span>
          )}
        </div>
        <span className="number">{number}</span>
      </div>
      <p className="description">
        {number % 100}%&nbsp;
        {description}
      </p>
    </div>
  );
};

export default Card;
