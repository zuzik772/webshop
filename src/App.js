import "./App.css";

import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import Product from "./Product";
import CheckoutForm from "./components/CheckoutForm";
import BasketContainer from "./components/BasketContainer";
import Basket from "./components/Basket";

function App() {
  return (
    <div className="App">
      <Nav />
      <main>
        <ProductList />
        <BasketContainer />
      </main>
    </div>
  );
}

export default App;
