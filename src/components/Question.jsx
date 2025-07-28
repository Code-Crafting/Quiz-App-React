import { Link } from "react-router";
import logo from "../assets/images/QuizTime.svg";
import Modal from "./Modal";
import Option from "./Option";
import { useEffect, useRef, useState } from "react";
import correct from "../assets/audio/correct.mp3";
import wrong from "../assets/audio/wrong.mp3";
import Footer from "./Footer";

const Questions = ({ localData, data }) => {
  const [dataNum, setDataNum] = useState(localData.questionNum);
  // const [dataNum, setDataNum] = useState(24);

  const [time, setTime] = useState(30);
  const [lock, setLock] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isOn, setIsOn] = useState(true);

  const optionRef = useRef([]);
  const intervalId = useRef(null);

  let audio = new Audio();

  const { question, options, correctAns } = data[dataNum];

  const allChildren = optionRef.current.map((option) =>
    Array.from(option.children)
  );

  const correctDiv = allChildren.filter(
    (child) => child[0].innerText === correctAns
  );

  const wrongDivs = allChildren.filter(
    (child) =>
      child[0].innerText !== correctAns &&
      !child[2].classList.contains("hidden")
  );

  // Checking Ans
  const checkAns = (target) => {
    clearInterval(intervalId.current);

    if (!lock) {
      // if clicked on text
      if (target.tagName === "P") {
        if (target.innerText === correctAns) {
          if (isOn) {
            audio.src = correct;
            audio.play();
          }

          localData.ans = localData.ans + 1;
          localStorage.setItem("data", JSON.stringify(localData));

          target.nextSibling.classList.remove("hidden");
          target.parentElement.classList.add("border-timer-bg");
          setLock(!lock);
        } else {
          if (isOn) {
            audio.src = wrong;
            audio.play();
          }

          target.nextSibling.nextSibling.classList.remove("hidden");
          target.parentElement.classList.add("border-timer-bg-3");
          if (correctDiv.length) {
            correctDiv[0][1].classList.remove("hidden");
            correctDiv[0][0].parentElement.classList.add("border-timer-bg");
          }
          setLock(!lock);
        }
        return;
      }

      // if clicked on div
      if (target.children[0].innerText === correctAns) {
        if (isOn) {
          audio.src = correct;
          audio.play();
        }

        localData.ans = localData.ans + 1;
        localStorage.setItem("data", JSON.stringify(localData));

        target.children[1].classList.remove("hidden");
        target.children[0].parentElement.classList.add("border-timer-bg");
        setLock(!lock);
      } else {
        if (isOn) {
          audio.src = wrong;
          audio.play();
        }
        target.children[2].classList.remove("hidden");
        target.children[0].parentElement.classList.add("border-timer-bg-3");
        if (correctDiv.length) {
          correctDiv[0][1].classList.remove("hidden");
          correctDiv[0][0].parentElement.classList.add("border-timer-bg");
        }
        setLock(!lock);
      }
    }
  };

  // Next button function
  const next = () => {
    if (!lock) setClicked(!clicked);
    if (lock && dataNum === 24) {
      localData.highestScore =
        localData.ans >= localData.highestScore
          ? localData.ans
          : localData.highestScore;
      localStorage.setItem("data", JSON.stringify(localData));
    }
    if (lock && dataNum < 24) {
      setDataNum(dataNum + 1);
      localData.questionNum = localData.questionNum + 1;
      localStorage.setItem("data", JSON.stringify(localData));

      setTime(30);
      setLock(!lock);
      correctDiv[0][1].classList.add("hidden");
      correctDiv[0][0].parentElement.classList.remove("border-timer-bg");

      if (wrongDivs.length) {
        wrongDivs[0][2].classList.add("hidden");
        wrongDivs[0][0].parentElement.classList.remove("border-timer-bg-3");
      }
    }
  };

  // Timer
  useEffect(() => {
    if (time === 0) return;
    intervalId.current = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(intervalId.current);
  }, [time]);

  return (
    <div
      className={`min-h-dvh ease-linear duration-100 ${
        time > 15 ? "bg-bg" : time > 5 ? "bg-bg-2" : "bg-bg-3"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <header className="flex items-center justify-between">
          <Link to={"/"}>
            <div className="w-[128px]">
              <img src={logo} alt="logo" />
            </div>
          </Link>
          {isOn ? (
            <div onClick={() => setIsOn(!isOn)}>
              <i className="fa-solid fa-volume-high text-xl cursor-pointer"></i>
            </div>
          ) : (
            <div onClick={() => setIsOn(!isOn)}>
              <i className="fa-solid fa-volume-xmark text-xl cursor-pointer"></i>
            </div>
          )}
        </header>

        <main>
          <div className="flex justify-end mt-4">
            <div className="text-base bg-question-num-bg px-[7px] py-[9.5px] traking-wide font-bold border-question-num-bg rounded-md">
              {dataNum + 1}/25
            </div>
          </div>

          <div
            className={`text-xl border border-con-bg bg-con-bg xsm:px-8 xsm:py-4 px-4 py-2 my-4 rounded-md  ease-linear duration-100 font-bold ${
              time > 15
                ? "shadow-box"
                : time > 5
                ? "shadow-box-2"
                : "shadow-box-3"
            }`}
          >
            <h4>{question}</h4>
          </div>

          <div className="flex justify-end">
            <div
              className={`tracking-wide text-base  py-[7px] px-[9.5px] text-white font-bold border rounded-md ease-linear duration-100 ${
                time > 15
                  ? "bg-timer-bg border-timer-bg"
                  : time > 5
                  ? "bg-timer-bg-2 border-timer-bg-2"
                  : "bg-timer-bg-3 border-timer-bg-3"
              }`}
            >
              00 : {time < 10 ? `0${time}` : time}
            </div>
          </div>

          <div
            className={`ease-linear duration-100 flex flex-col py-4 xsm:px-8  px-4 gap-4 bg-con-bg mt-4  rounded-md ${
              time > 15
                ? "shadow-box"
                : time > 5
                ? "shadow-box-2"
                : "shadow-box-3"
            }`}
          >
            {options.map((option, index) => {
              return (
                <Option
                  key={index}
                  option={option}
                  ref={(el) => (optionRef.current[index] = el)}
                  checkAns={checkAns}
                />
              );
            })}
          </div>

          <div
            className={`flex justify-end mt-8 text-xl font-bold  cursor-pointer ease-linear ${
              time > 15
                ? "text-nxt-page"
                : time > 5
                ? "text-nxt-page-2"
                : "text-timer-bg-3"
            }`}
          >
            <Link to={localData.questionNum === 24 ? "/result" : ""}>
              <p onClick={() => next()}>Next &#62;</p>
            </Link>
          </div>

          <Footer margin={"mt-12"} />

          {time === 0 && (
            <Modal>
              <div className="bg-question-num-bg border-question-num-bg shadow-dialog-box w-xs h-[160px] flex flex-col justify-center items-cennter p-20 rounded-lg animate-scale">
                <h1 className="text-dialog-h1 font-bold text-2xl text-center">
                  Time's Up!
                </h1>
                <Link
                  to={localData.questionNum === 24 ? "/result" : ""}
                  className="text-center"
                >
                  <button
                    className="bg-nxt-page-2 text-white mt-4 text-base p-[7.5px] cursor-pointer text-lg rounded"
                    onClick={() => {
                      if (dataNum < 24) {
                        setDataNum(dataNum + 1);
                        setTime(30);

                        localData.questionNum = localData.questionNum + 1;
                        localStorage.setItem("data", JSON.stringify(localData));
                      }
                    }}
                  >
                    {localData.questionNum === 24
                      ? "See Result"
                      : "Next Question"}
                  </button>
                </Link>
              </div>
            </Modal>
          )}

          {clicked && (
            <Modal>
              <div className="bg-red border-red shadow-dialog-box w-xs h-[160px] flex flex-col justify-center items-cennter p-20 rounded-lg animate-scale">
                <h1 className="text-white font-bold text-2xl text-center">
                  Please select an option!
                </h1>
                <button
                  className="bg-red-border text-white mt-4 text-base p-[7.5px] cursor-pointer text-lg rounded"
                  onClick={() => setClicked(!clicked)}
                >
                  Ok
                </button>
              </div>
            </Modal>
          )}
        </main>
      </div>
    </div>
  );
};

export default Questions;
