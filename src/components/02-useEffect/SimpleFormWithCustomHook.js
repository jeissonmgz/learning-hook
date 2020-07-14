import React, { useState } from "react";
import "./effect.css";
import { Message } from "./Message";
import { useForm } from "../../hooks/useForm";

const SimpleFormWithCustomHook = (props) => {
  const [formState, handleInputChange, handleSubmit] = useForm();
  const { name, email, password } = formState;
  return (
    <form onSubmit={handleSubmit}>
      <h1>Form With Custom Hook</h1>
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
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Tu password"
          autoComplete="off"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      {name === "123" && <Message />}
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

SimpleFormWithCustomHook.propTypes = {};

export default SimpleFormWithCustomHook;
