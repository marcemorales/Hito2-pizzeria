const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand mb-0 h1 brand">Pizzería Mamma Mia!</span>
      <div className="d-flex gap-2">
        <button className="btn btn-outline-secondary btn-sm">Home</button>
        <button className="btn btn-outline-warning btn-sm">Login</button>
        <button className="btn btn-outline-success btn-sm">Register</button>
      </div>
    </nav>
  );
};
export default Navbar;
