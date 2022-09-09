import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { QuizScreen } from "../pages/quiz";
import { ResultScreen } from "../pages/results";
import ProtectedRoute, { ProtectedRouteProps } from "../hocs/protectedRouter";
import { useSelector } from "react-redux";
import { selectResults } from "../redux";


// eslint-disable-next-line react-hooks/rules-of-hooks

export default function RootRouter() {
  
  const results = useSelector(selectResults);


  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isResult: (results.length === 10),
    authenticationPath: '/',
    redirectPath: "/results",
    setRedirectPath: function (path: string): void {
      console.log("error");
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<ResultScreen />} />}  />
        <Route path="/quiz" element={<QuizScreen />} />
        {/* <Route path="/results" element={<ResultScreen />} /> */}
      </Routes>
    </Router>
  )
};

