import React, { useEffect, useState } from "react";
import axios from "axios";

export const Api = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setDatas(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <center>
        <h1>Api</h1>
        <table className="table table-hover table table-striped w-50 ">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((x) => (
              <tr>
                <td>{x.id}</td>
                <td>{x.title}</td>
                <td>{x.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};
