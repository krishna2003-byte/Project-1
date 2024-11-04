import CartCard from "./CartCard";

const CartContainer = ({ cart, remove, emptycart }) => {
  const totalItem = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalP = cart.reduce(
    (sum, item) =>
      sum + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <div className="CartContainer">
      {cart.length === 0 ? (
        <p>No items.</p>
      ) : (
        <>
          <h2>Cart Items::{totalItem}</h2>
          {cart.map((item) => (
            <CartCard key={item.id} item={item} remove={remove} />
          ))}
          <div>
            <button className="EmptyCartButton" onClick={emptycart}>
              Empty Cart
            </button>
            <button className="BuyButton">
              Buy Total: ${totalP.toFixed(2)}
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default CartContainer;
