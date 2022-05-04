import { useState } from "react";

export default function Product(props) {
  function buyProduct() {
    props.setBasket((oldState) => [...oldState, props.product]);
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
