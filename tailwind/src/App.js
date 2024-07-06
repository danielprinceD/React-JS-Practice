import React from "react";

const App = () => {
  return (
    <div className="flex justify-center flex-col gap-8">
      <button className="bg-sky-500 p-10 w-40  self-center hover:bg-sky-700 transition ease-linear hover:translate-x-4 rounded-2xl">
        Hello
      </button>
      <p
        className="text-justify px-10 pt-2 
       selection:bg-red-500 hover:bg-sky-200 transition duration-700"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias fuga,
        voluptatum quia consectetur quos ipsum minima, pariatur modi error,
        necessitatibus libero dolore commodi a reprehenderit dolorem! Laboriosam
        error nesciunt id libero animi culpa. Minima, et eveniet amet in
        eligendi impedit distinctio dolores debitis fuga. Quidem eligendi cumque
        minus esse molestias, fuga molestiae voluptates repudiandae dolores cum
        sed blanditiis explicabo, facilis aliquid recusandae iste, provident
        possimus sequi qui numquam consequatur. Minus, mollitia. Impedit
        repellat officia itaque praesentium hic veniam sed ab a harum maiores
        ducimus ipsa reprehenderit, nulla accusamus ad nemo tenetur enim odio
        sequi et quas explicabo, quasi iusto unde
      </p>
      <div className=" flex self-center  first-letter:capitalize flex-col center gap-5">
        <div>
          <label htmlFor="name" className="">
            Name :{" "}
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border border-blue-500 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label htmlFor="roll" className="">
            Roll Number :{" "}
          </label>
          <input
            type="number"
            id="roll"
            placeholder="Enter your roll number"
            className="border border-blue-500 placeholder:text-gray-400"
          />
        </div>
        <div>
          <label htmlFor="dep" className="">
            Department :{" "}
          </label>
          <input
            type="text"
            id="dep"
            placeholder="Enter your name"
            className="border border-blue-500 placeholder:text-gray-400"
          />
        </div>
      </div>
      <div className="self-center sm:hidden md:block ">
        <ul className="list-disc">
          <li className="h1">Hello</li>
          <li>Hello</li>
          <li>Hello</li>
          <li>Hello</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
