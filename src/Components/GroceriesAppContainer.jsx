import { useState } from "react";
import ProductsContainer from "./ProductsContainer";
import products from "../data/products";
import CartContainer from "./CartContainer";
import NavBar from "./NavBar";

const GroceriesAppContainer = () => {
  const [cart, setcart] = useState([]);

  const addToCart = (product, quantity) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setcart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setcart([...cart, { ...product, quantity }]);
    }
  };

  const remove = (id) => {
    setcart(cart.filter((item) => item.id !== id));
  };

  const emptycart = () => {
    setcart([]);
  };

  return (
    <div>
      <NavBar cart={cart} />
      <div className="GroceriesContainer">
        <ProductsContainer products={products} addToCart={addToCart} />
        <CartContainer cart={cart} remove={remove} emptycart={emptycart} />
      </div>
    </div>
  );
};

export default GroceriesAppContainer;
