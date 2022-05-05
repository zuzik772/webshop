function Basket(props) {
  const initialValue = 0;
  const sumWithInitial = props.basket.reduce(
    (previousValue, currentValue) => previousValue + currentValue.price,
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
            <>
              <li>
                {item.productdisplayname} ${item.price}
                <button onClick={() => removeItem(item.id)}>X</button>
              </li>
            </>
          );
        })}
      </ul>
      <p>Total: ${sumWithInitial}</p>
    </aside>
  );
}

export default Basket;
