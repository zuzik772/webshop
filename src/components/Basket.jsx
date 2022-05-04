function Basket(props) {
  return (
    <>
      <ul>
        {props.basket.map((item) => {
          return (
            <li>
              {item.productdisplayname} ${item.price}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Basket;
