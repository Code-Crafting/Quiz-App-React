import { Link } from "react-router";
import logo from "../assets/images/QuizTime.svg";
import startBtn from "../assets/images/startNowBtn.svg";
import Footer from "./Footer";

const Home = ({ localData, data }) => {
  return (
    <div className="h-dvh">
      <div className="max-w-md mx-auto flex flex-col items-center justify-center h-full xsm:p-8 p-4">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="w-1/2 cursor-pointer">
          <Link to="/questions">
            <img src={startBtn} alt="start now" />
          </Link>
        </div>
        {localData.highestScore > 0 ? (
          <div className="font-bold xsm:text-2xl text-xl xsm:mt-20 mt-12">
            Highest Score {localData.highestScore} / {data.length}
          </div>
        ) : (
          ""
        )}

        <Footer margin={"mt-32"} />
      </div>
    </div>
  );
};

export default Home;
