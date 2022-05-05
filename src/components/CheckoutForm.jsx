import { useRef } from "react";
function CheckoutForm() {
  const formEl = useRef(null);
  function submitted(e) {
    e.preventDefault();
    console.log(formEl.current.elements.name.value);
    console.log(formEl.current.elements.email.value);
  }
  return (
    <form ref={formEl} onSubmit={submitted}>
      <div>
        <label htmlFor="name">Name</label>
        <input required type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" />
      </div>
      <button>Pay</button>
    </form>
  );
}

export default CheckoutForm;
