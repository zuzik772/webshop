import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

function BasketContainer(props) {
  return (
    <div className="basketContainer">
      <h2>Basket</h2>
      <Basket setBasket={props.setBasket} basket={props.basket} />
      <CheckoutForm />
    </div>
  );
}

export default BasketContainer;
