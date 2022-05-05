import Product from "../Product";

export default function ProductList({ products, setBasket, basket }) {
  return (
    <>
      <section>
        <h2>Product List</h2>
        {products.map((product) => (
          <Product key={product.id} basket={basket} setBasket={setBasket} product={product} />
        ))}
      </section>
    </>
  );
}
