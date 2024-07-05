import React from "react";

import { useQuery } from "@tanstack/react-query";
import { waitFor } from "@testing-library/react";
const data = [
  {
    id: 1,
    name: "daniel",
    age: 20,
  },
  {
    id: 2,
    name: "david",
    age: 18,
  },
];

const addData = {
  id: 3,
  name: "newPerson",
  age: 30,
};

function wait(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, time);
  });
}
const App = () => {
  const detailsQuery = useQuery({
    queryKey: ["details"],
    queryFn: () =>
      wait(2000)
        .then(() => [...data])
        .catch(() => console.log("error")),
  });
  if (detailsQuery.isLoading) return <div>Loading</div>;
  if (detailsQuery.isError) return <div>Not found</div>;


  
  return (
    <div>
      {detailsQuery.data.map((e) => (
        <h2>
          {e.id} {e.name} {e.age}
          <br />
        </h2>
      ))}
      <button>Add New Person</button>
    </div>
  );
};

export default App;
