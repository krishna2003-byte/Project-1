const NavBar = ({ cart, username = "username" }) => {
  const cartempty = cart.length === 0;

  return (
    <nav className="NavBar">
      <p>Welcome, {username}!</p>
      <p>Grocery App</p>

      <div>
        <img
          src={
            cartempty ? "src/assets/cart-empty.png" : "src/assets/cart-full.png"
          }
          alt="img"
        />
        {!cartempty && <span className="cartvalue"></span>}
      </div>
    </nav>
  );
};

export default NavBar;
