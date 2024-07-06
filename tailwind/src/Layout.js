import React from "react";

const Layout = () => {
  return (
    <>
      <div className="h-screen w-screen bg-red-50">
        <h3 className="text-2xl md:text-5xl text-center">Layouts</h3>

        <div className="container mx-auto text-white rounded-md p-2 text-center bg-red-400">
          This is Container
        </div>
        <div className="container mx-auto leading-7 columns-2  text-justify">
          <img
            className="float-end m-3 rounded-md shadow-md shadow-slate-700"
            src="https://picsum.photos/200/100"
          />
          <div>
            1 . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            eligendi dolor animi tenetur iure adipisci illum dolores amet.
            Repellendus accusamus unde, eligendi omnis est iusto recusandae
            dicta architecto pariatur ea.
          </div>
          <div>
            2 . Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            eligendi dolor animi tenetur iure adipisci illum dolores amet.
            Repellendus accusamus unde, eligendi omnis est iusto recusandae
            dicta architecto pariatur ea.
          </div>
          <div>
            3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            eligendi dolor animi tenetur iure adipisci illum dolores amet.
            Repellendus accusamus unde, eligendi omnis est iusto recusandae
            dicta architecto pariatur ea.
          </div>
        </div>
        <div className="container mt-3 mx-auto">
          <div className="text-center text-2xl">Position</div>
          <div className="relative bg-red-500 h-16 ">
            <pre className="text-center text-white">Relative</pre>
            <div className="absolute h-8 bg-green-400 w-32 text-center text-white -left-4 hover:left-0 transition-all duration-700 ease-linear">
              Absolute
            </div>
          </div>
        </div>
        <div className="container mt-20 mx-auto">
          <div className="bg-purple-500 w-64 h-16 rounded-lg flex justify-center">
            <div className="bg-purple-300 h-12 w-8 self-center rounded-lg content-center text-center z-50 border ">
              1
            </div>
            <div className=" border bg-purple-300 h-12 w-8 self-center rounded-lg content-center text-center z-30">
              2
            </div>
            <div className="bg-purple-300 h-12 w-8 self-center rounded-lg content-center text-center z-20">
              3
            </div>
            <div className="bg-purple-300 h-12 w-8 self-center rounded-lg content-center text-center z-10">
              4
            </div>
          </div>
        </div>
        <div className="bg-red-400 flex mt-2 container mx-auto h-64">
          <img
            src="https://picsum.photos/id/237/536"
            alt=""
            className="h-64 w-64 object-center transition-all hover:object-none duration-7000 ease-linear"
          />
          <img
            src="https://picsum.photos/id/237/536"
            alt=""
            className="h-64 hover:blur-none blur-sm w-64 object-center transition-all  duration-7000 ease-linear"
          />
        </div>
      </div>
    </>
  );
};

export default Layout;
