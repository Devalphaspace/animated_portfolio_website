import React from "react";

const SkillBox = ({ logo, black, white, skill }) => {
  return (
    <div
    data-aos="zoom-in" data-aos-duration="1000"
      className={
        "box w-[11rem] h-[11rem] rounded-lg bg-" +
        black +
        " text-" +
        white +
        " shadow-2xl flex flex-col items-center justify-center gap-4 p-1 sm:w-[7.2rem] sm:h-[7.2rem] exsm:w-[6.5rem] exsm:h-[6.5rem]"
      }
    >
      <div
        className={
          "bg-" +
          white +
          " text-" +
          black +
          " w-14 sm:w-12 exsm:w-10 h-14 sm:h-12 exsm:h-10 p-2 rounded-full flex items-center justify-center text-6xl sm:text-4xl"
        }
      >
        {logo}
      </div>
      <p className="font-semibold exsm:text-sm">{skill}</p>
    </div>
  );
};

export default SkillBox;
