// import { useState } from "react";

export default function Product(props) {
  // const [count, setCount] = useState(0);
  // function countHandler() {
  //   console.log(count);
  //   setCount = count + 1;
  // }
  function handleBasket() {
props.setBasket(props.basket)
  }
  return (
    <article>
      <h4>{props.usagetype}</h4>
      <p>{props.brandname}</p>
      <p>{props.productdisplayname}</p>
      <img src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`} alt="" />
      <p>{props.price}kr</p>
      <button onClick={handleBasket}>add to basket</button>
    </article>
  );
}
