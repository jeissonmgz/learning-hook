import { useState, useEffect } from "react";

export const useForm = (
  initialState = {
    name: "",
    email: "",
    password: "",
  }
) => {
  const [formState, setstate] = useState(initialState);
  useEffect(() => {
    console.log("Mail has changed");
  }, [formState.email]);
  const handleInputChange = ({ target }) => {
    setstate({ ...formState, [target.name]: target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };
  return [formState, handleInputChange, handleSubmit];
};
