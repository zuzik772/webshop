import "./App.css";

import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import BasketContainer from "./components/BasketContainer";

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
