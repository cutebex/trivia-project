import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { reset } from "../../redux";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <div className={"center"}>
      <div className={"title"}>Welcome to the Trivia Challenge!</div>
      <div className={"desc"}>
        You will be presented with 10 True of False questions.
      </div>
      <div className={"desc"}>Can you score 100%?</div>
      <div>
        <button
            className={"btn-start"}
            onClick={() => {
                navigate("/quiz");
            }}
        >
          Begin
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;
