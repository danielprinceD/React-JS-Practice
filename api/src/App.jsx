import React, { useEffect, useState } from "react";
import axios from "axios";
export const App = () => {
  const [data, setData] = useState([{}]);
  const [post, setPost] = useState({
    id: Number,
    name: "",
  });
  const [popup, setPopup] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:3000/student").then((res) => setData(res.data));
  });
  let handleSubmit = (data) => {
    axios.post("http://localhost:3000/student", post);
    setPost({ name: "", id: Number });
  };
  let deleteById = (id) => {
    axios.delete(`http://localhost:3000/student/${id}`);
  };
  const [update, setUpdate] = useState({
    id: Number,
    name: "",
  });
  let updateData = (data) => {
    setUpdate({
      id: data.id,
      name: data.name,
    });
  };
  const [origi, setOrig] = useState(0);
  let updateSubmit = () => {
    axios.put(`http://localhost:3000/student/${update.id}`, {
      id: update.id,
      name: update.name,
    });
  };
  return (
    <div>
      <h1>API</h1>
      <form action="post" onSubmit={() => handleSubmit(post)}>
        <input
          type="number"
          name="id"
          value={post.id}
          onChange={(e) => setPost({ ...post, id: e.target.value })}
          placeholder="ID"
        />
        <br />
        <input
          type="text"
          name="name"
          onChange={(e) => setPost({ ...post, name: e.target.value })}
          value={post.name}
          placeholder="Name"
        />
        <br />
        <button type="button" onClick={() => handleSubmit(post)}>
          Submit
        </button>
      </form>
      {data == false ? (
        <p>No Data in the database</p>
      ) : (
        <table>
          <thead>
            <th>ID</th>
            <th>Name</th>
          </thead>
          <tbody>
            {data.map((i) => (
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>
                  <button
                    onClick={() => {
                      setPopup(true);
                      updateData(i);
                    }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => {
                      deleteById(i.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {popup && (
        <form action="">
          <input
            type="Number"
            value={update.id}
            onChange={(e) => setUpdate({ ...update, id: e.target.value })}
          />
          <br />
          <input
            type="text"
            value={update.name}
            onChange={(e) => setUpdate({ ...update, name: e.target.value })}
          />
          <br />
          <button onClick={updateSubmit}>Update</button>
        </form>
      )}
    </div>
  );
};
