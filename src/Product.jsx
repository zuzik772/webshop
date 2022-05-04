import { useState } from "react";

export default function Product(props) {
  return (
    <article>
      <h4>{props.usagetype}</h4>
      <p>{props.brandname}</p>
      <p>{props.productdisplayname}</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt="" />
      <p>{props.price}kr</p>
      <button>add to basket</button>
    </article>
  );
}
