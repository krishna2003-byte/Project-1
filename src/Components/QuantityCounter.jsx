const QuantityCounter = ({ quantity, increase, decrease }) => {
  return (
    <div className="QuantityCounter">
      <button onClick={decrease} disabled={quantity <= 1}>
        -
      </button>
      <span>{quantity}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default QuantityCounter;
