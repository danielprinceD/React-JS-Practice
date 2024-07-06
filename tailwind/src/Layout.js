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
      </div>
    </>
  );
};

export default Layout;
