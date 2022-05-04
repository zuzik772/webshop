import Product from "../Product";

export default function ProductList({ products, setBasket }) {
  return (
    <>
      <section>
        <h2>Product List</h2>
        {products.map((product) => (
          <Product key={product.id} setBasket={setBasket} {...product} />
        ))}
      </section>
    </>
  );
}
