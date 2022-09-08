import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../components/home";
import { QuizScreen } from "../components/quiz";
import { ResultScreen } from "../components/results";

const RootRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizScreen />} />
      <Route path="/results" element={<ResultScreen />} />
    </Routes>
  </Router>
);

export default RootRouter;
