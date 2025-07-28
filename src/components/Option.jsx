import { useEffect, useRef, useState } from "react";
import correct from "../assets/images/correct.svg";
import wrong from "../assets/images/wrong.svg";

const Option = ({ option, ref, checkAns }) => {
  return (
    <div ref={ref} className="options" onClick={(e) => checkAns(e.target)}>
      <p>{option}</p>

      <img
        src={correct}
        className="w-[32px] h-[24px] hidden"
        alt="correct icon "
      />

      <div className="flex justify-between items-center gap-2 hidden">
        <p className="sm:block hidden">You chose</p>
        <img src={wrong} className="w-[32px] h-[24px]" alt="correct icon" />
      </div>
    </div>
  );
};

export default Option;
