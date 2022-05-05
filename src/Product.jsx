// import { useState } from "react";

export default function Product(props) {
  function buyProduct() {
    if (props.basket.find((item) => item.id === props.product.id)) {
      console.log("got ya already");
      // create new array
      props.setBasket((old) =>
        old.map((item) => {
          if (item.id === props.product.id) {
            const copy = { ...item };
            copy.amount++;
            return copy;
          }
          return item;
        })
      );
    } else {
      props.setBasket((oldState) => [...oldState, { ...props.product, amount: 1 }]);
    }
  }

  return (
    <article>
      <h4>{props.product.usagetype}</h4>
      <p>{props.product.brandname}</p>
      <p>{props.product.productdisplayname}</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.product.id}.webp`} alt="" />
      <p>{props.product.price}kr</p>
      <button onClick={buyProduct}>add to basket</button>
    </article>
  );
}
