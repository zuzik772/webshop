function CheckoutForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>
    </form>
  );
}

export default CheckoutForm;
