function Basket(props) {
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
    </aside>
  );
}

export default Basket;
