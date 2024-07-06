import React from "react";

const MyGrid = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4 mt-10">
        <div className="bg-blue-500 p-2 rounded-md">Hello</div>
        <div className="bg-blue-500 p-2 rounded-md">Hello</div>
        <div className="bg-blue-500 p-2 rounded-md">Hello</div>
        <div className="bg-blue-500 p-2 rounded-md col-span-3">Hello</div>
      </div>
      <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-4 mt-10">
        <div className="bg-blue-500 p-2 rounded-md col-start-2">Hello 1</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 2 </div>
        <div className="bg-blue-500 p-2 rounded-md">Hello 3</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 4</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 5</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 6</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 7</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 8</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 9</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 10</div>
      </div>

      <div className="grid grid-rows-4 grid-flow-col gap-2 mt-5">
        <div className="bg-blue-500 p-2 rounded-md ">Hello 10</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 10</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 10</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 10</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 10</div>
        <div className="bg-blue-500 p-2 rounded-md ">Hello 10</div>
      </div>
    </>
  );
};

export default MyGrid;
