import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (item) => {
    dispatch({ type: 'REMOVE_ITEM', payload: item });
  };

  return (
    <div className="cart">
      <h2>Carrinho de Compras</h2>
      {state.items.length === 0 ? (
        <p>Seu carrinho está vazio</p>
      ) : (
        <ul>
          {state.items.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => handleRemoveItem(item)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
