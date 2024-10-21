import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Cellphone Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Registrar</Link>
      </nav>
    </header>
  );
}

export default Header;
