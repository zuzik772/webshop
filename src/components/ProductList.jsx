// import Product from "../Product";


export default function ProductList(props) {


  return (
    <>
      <section>
        <h2>Product List</h2>
        {props.products.map((product) => (
          <Product {...product} />
        ))}
      </section>
    </>
  );
}


  function Product(props) {
    function handleBasket() {
      props.setBasket(props.basket);
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