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
      </div>
    </div>
  );
};

export default Animation;
