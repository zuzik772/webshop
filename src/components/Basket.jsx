function Basket(props) {
  const initialValue = 0;
  const sumWithInitial = props.basket.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
    initialValue
  );
  return (
    <aside>
      <ul>
        {props.basket.map((item) => {
          return (
            <li>
              {item.productdisplayname} ${item.price}
            </li>
          );
        })}
      </ul>
      <p>Total: ${sumWithInitial}</p>
    </aside>
  );
}

export default Basket;
