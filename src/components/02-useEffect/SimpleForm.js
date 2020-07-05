import React, { useEffect, useState } from "react";
import "./effect.css";
import { Message } from "./Message";

const SimpleForm = (props) => {
  const [formState, setstate] = useState({ name: "", email: "" });
  const { name, email } = formState;
  useEffect(() => {
    console.log("Hey");
  }, []);
  useEffect(() => {
    console.log("update form");
  }, [formState]);
  useEffect(() => {
    console.log("update email");
  }, [email]);
  const handleInputChange = ({ target }) => {
    setstate({ ...formState, [target.name]: target.value });
  };
  return (
    <>
      <h1>Use Effect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
    </>
  );
};

SimpleForm.propTypes = {};

export default SimpleForm;
