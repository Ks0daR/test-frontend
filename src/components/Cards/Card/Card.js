import React from "react";
import InputForm from "../../InputForm";

const Card = () => {
  const submit = (data) => {
    console.log(data);
  };
  return <InputForm onSubmit={submit} />;
};

export default Card;
