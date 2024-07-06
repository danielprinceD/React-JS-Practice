import React from "react";

const Animation = () => {
  return (
    <div className="h-screen">
      <div className="container mx-auto bg-red-300">
        <p className="text-center text-[30px]">Animation and Transition</p>
        <div className="flex justify-center gap-4 text-center mt-5">
          <button className="bg-blue-500 p-2 rounded-md text-white text-[20px]  hover:-translate-y-2  transition ease-in duration-500">
            Translate
          </button>
          <button className="bg-blue-500 p-2 rounded-md text-white text-[20px] hover:scale-110  transition ease-in duration-500">
            Scale
          </button>
        </div>
        <div className="container flex gap-2 m-3">
          <img
            src="https://picsum.photos/id/237/536"
            className="origin-bottom-left transition  hover:-rotate-12 h-64"
            alt=""
            title="Transform"
          />
          <img
            src="https://picsum.photos/id/237/536"
            className="origin-bottom-left transition -skew-y-12 hover:-skew-y-0 h-64"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Animation;
