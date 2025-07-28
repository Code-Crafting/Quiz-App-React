import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import data from "../public/data.js";
import Home from "./components/Home.jsx";
import Questions from "./components/Question.jsx";
import Result from "./components/Result.jsx";

function App() {
  const localData = JSON.parse(localStorage.getItem("data")) || {
    questionNum: 0,
    ans: 0,
    highestScore: 0,
  };
  localStorage.setItem("data", JSON.stringify(localData));

  // let highestScore = JSON.parse(localStorage.getItem("highestScore")) || 0;
  // console.log(highestScore);
  // localStorage.setItem("highestScore", JSON.stringify(highestScore));

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home localData={localData} data={data} />} />
        ,
        <Route
          path="/questions"
          element={<Questions localData={localData} data={data} />}
        />
        ,
        <Route path="/result" element={<Result localData={localData} />} />,
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
