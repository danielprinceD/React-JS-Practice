import React from "react";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

const App = () => {
  function wait(time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve();
      }, time);
    });
  }
  const queryClient = useQueryClient();
  const detailsQuery = useQuery({
    queryKey: ["details"],
    queryFn: () =>
      wait(2000)
        .then(() => [...data])
        .catch(() => console.log("error")),
    staleTime: 5000,
  });
  const detailsMutation = useMutation({
    mutationKey: ["detailMutation"],
    mutationFn: (newData) => {
      return wait(2000).then(() => {
        data.push(newData);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["details"]);
    },
  });
  if (detailsQuery.isLoading) return <h1>Loading</h1>;
  if (detailsQuery.isError) return <div>Not found</div>;

  return (
    <div>
      {detailsQuery.data.map((e) => (
        <h2>
          {e.id} {e.name} {e.age}
          <br />
        </h2>
      ))}

      <button
        disabled={detailsMutation.isPending}
        onClick={() => {
          console.log();
          detailsMutation.mutate(addData);
        }}
      >
        Add New Person
      </button>
    </div>
  );
};

export default App;
