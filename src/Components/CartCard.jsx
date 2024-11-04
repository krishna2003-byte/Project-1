import QuantityCounter from "./QuantityCounter";

const CartCard = ({ item, remove }) => {
  return (
    <div>
      <div>
        <img src={item.image} alt={item.productName} />
        <p>{item.productName}</p>
        <p>Price: {item.price}</p>
        <QuantityCounter quantity={item.quantity} />
      </div>
      <div>
        <p>
          Total: $
          {(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}
        </p>
        <button onClick={() => remove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartCard;
