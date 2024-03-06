import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  let changer = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="Form-container form-group d-flex justify-content-center gap-3 ">
      <form action="post">
        <label>First Name : </label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={changer}
          className="form-control"
        />
        <label>Last Name : </label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={changer}
          className="form-control"
        />
        <button type="submit" className="btn btn-outline-success  ">
          Submit
        </button>
      </form>
      <h1>{formData.firstName}</h1>
      <h1>{formData.lastName}</h1>
    </div>
  );
}
