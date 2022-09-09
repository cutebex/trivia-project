import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectResults } from "../../redux";
import Results from "./Results";

const ResultScreen = () => {
  const results = useSelector(selectResults);
  const navigate = useNavigate();

  const onPlayAgain = () => {
    navigate("/");
  };

  return <Results results={results} onPlayAgain={onPlayAgain} />;
};

export default ResultScreen;
