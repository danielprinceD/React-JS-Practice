import React from "react";

const Borders = () => {
  return (
    <div className="h-screen bg-red-200 rounded-md m-2">
      <div className="container text-center  mx-auto bg-red-500 text-white">
        Borders
      </div>
      <div className="container mx-auto border-4 border-blue-700">Border</div>
      <input
        type="text"
        className="focus:outline-rose-500 outline outline-1 outline-purple-700"
      />
      <button className="bg-red-500 ring ring-offset-2 text-white px-4 py-1 rounded-md active:bg-red-400">
        Button
      </button>
      <div className="container m-4">
        <div
          className="bg-white p-3 justify-center rounded-lg shadow-md
        shadow-black flex flex-col gap-3 w-64 "
        >
          <div className="">
            <img src="https://picsum.photos/id/237/536" alt="" />
          </div>
          <div className="text-center">Hello</div>
          <div className="bg-red-500  text-white py-1 rounded-md active:bg-red-400 text-center">
            Button
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borders;
