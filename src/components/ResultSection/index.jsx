import { useNavigate } from "react-router-dom";
import "./style.scss";

const ResultSection = ({result}) => {

  const navigate = useNavigate();

  // back to the exam and start again
  const handleClick = () => {
    navigate("/");
  }

  return (
    <div className="result">
      <div className="result__content">
        <h3>Result</h3>
        <p>{result}%</p>
        <button onClick={handleClick}>Start Again</button>
      </div>
    </div>
  )
}

export default ResultSection