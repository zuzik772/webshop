import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://kea-alt-del.dk/t7/api/products");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Nav />
      <main>
        <ProductList products={products} basket={basket} setBasket={setBasket} />
        <BasketContainer setBasket={setBasket} basket={basket} />
      </main>
    </div>
  );
}

export default App;
