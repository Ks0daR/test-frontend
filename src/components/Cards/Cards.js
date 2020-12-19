import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsOperations } from "../../redux/products";
import styles from "./Cards.module.css";
import Card from "./Card";

const Cards = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productsReducer);
  console.log(products);

  useEffect(() => {
    dispatch(productsOperations.fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All hot-dogs</h1>
      <div className={styles.cardsContainer}>
        {products &&
          products.map(({ id, img, name, description, price }) => (
            <Card
              key={id}
              id={id}
              name={name}
              img={img}
              description={description}
              price={price}
            />
          ))}
      </div>
    </div>
  );
};

export default Cards;
