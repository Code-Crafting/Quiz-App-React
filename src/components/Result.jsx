import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import logo from "../assets/images/QuizTime.svg";
import { Link } from "react-router";
import Footer from "./Footer";

ChartJS.register(ArcElement, Tooltip, Legend);
const Result = ({ localData }) => {
  const percentage = (localData.ans / 25) * 100;

  const data = {
    datasets: [
      {
        backgroundColor: ["#0aaf13", "#ed6e6eeb"],
        data: [percentage, 100 - percentage],
        borderWidth: 1,
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.raw}%`;
          },
        },
      },
    },
  };
  return (
    <>
      <div className="max-w-4xl mx-auto px-8 py-4">
        <div className="grid place-items-center">
          <img src={logo} alt="quiz logo" className="xsm:w-3xs w-[160px]" />
          <h4 className="text-xl font-bold">Result</h4>
        </div>

        <div className="grid place-items-center">
          <div className="relative grid place-items-center xsm:mt-8 mt-4 xsm:w-3xs w-[200px] aspect-square">
            <p className="absolute top-1/2 left-1/2 font-bold -translate-1/2">
              {localData.ans}/25
            </p>
            <div className="relative xsm:w-3xs w-[200px] h-full">
              <Doughnut data={data} options={options} />
            </div>
          </div>
        </div>

        <div className="grid place-items-center xsm:mt-12 mt-8 gap-4">
          <div className="md:w-[60%] sm:w-[80%] w-full text-center">
            <h2 className="xsm:text-2xl text-xl font-bold">
              "
              {percentage > 90
                ? "Excellent work! You nailed it - keep up the great learning!"
                : percentage <= 90 && percentage > 60
                ? "Great effort! You're almost there - just a bit more practice"
                : percentage <= 60 && percentage > 45
                ? "Good Try! Keep practicing and you'll improve in no time."
                : percentage <= 45 && percentage > 30
                ? "You're learning - don't give up!"
                : percentage <= 30
                ? "Every expert was once a beginer. Keep Going!"
                : ""}
              "
            </h2>
          </div>
          <Link to={"/"}>
            <button
              className="border border-green shadow-retry font-bold px-4 py-2 tracking-wide text-white bg-green rounded cursor-pointer"
              onClick={() => {
                localData.questionNum = 0;
                localData.ans = 0;
                localStorage.setItem("data", JSON.stringify(localData));
              }}
            >
              &#60; &#60; &#60; Retry
            </button>
          </Link>
        </div>

        <Footer margin={"mt-14"} />
      </div>
    </>
  );
};

export default Result;
