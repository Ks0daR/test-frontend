import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { productsOperations } from "../../redux/products";
import Card from "./Card";

const Cards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
    console.log();
  });

  return (
    <>
      <h1>Helloworld</h1>
      <Card />
    </>
  );
};

export default Cards;
