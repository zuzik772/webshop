import Basket from "./Basket";
import CheckoutForm from "./CheckoutForm";

function BasketContainer(props) {
  return (
    <>
      <h2>Basket</h2>
      <Basket setBasket={props.setBasket} basket={props.basket} />
      <CheckoutForm />
    </>
  );
}

export default BasketContainer;
