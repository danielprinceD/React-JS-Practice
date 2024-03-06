import { useState } from "react";

let Validate = () => {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
  });
  let submitter = () => {
    setList([...list, formData]);
  };
  let changer = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  let formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form action="post" onSubmit={formSubmit} className="form-group">
        <label>Name : </label>
        <input
          className="form-control"
          type="text"
          value={formData.name}
          name="name"
          onChange={changer}
        />
        <label htmlFor="">Roll : </label>
        <input
          className="form-control"
          type="text"
          value={formData.roll}
          name="roll"
          onChange={changer}
        />
        <button
          type="reset"
          onClick={submitter}
          className="btn btn-outline-success"
        >
          Submit
        </button>
      </form>
      <table className="table ">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Roll</th>
          </tr>
        </thead>
        <tbody>
          {list.map((x) => (
            <tr>
              <td>{x.name}</td>
              <td>{x.roll}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Validate;
