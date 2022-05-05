function Basket(props) {
  const initialValue = 0;
  const sumWithInitial = props.basket.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount * currentValue.price,
    initialValue
  );
  function removeItem(id) {
    props.setBasket((old) => old.filter((item) => item.id !== id));
  }
  return (
    <aside>
      <ul>
        {props.basket.map((item) => {
          return (
            <li key={item.id}>
              {item.amount}x {item.productdisplayname} ${item.price}
              <button onClick={() => removeItem(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
      <p>Total: ${sumWithInitial}</p>
    </aside>
  );
}

export default Basket;
