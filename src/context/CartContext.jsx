import { createContext, useContext, useMemo, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const product = action.payload;
      const exists = state.find((item) => item.id === product.id);
      if (exists) {
        return state.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...state, { ...product, qty: 1 }];
    }

    case "REMOVE":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_QTY": {
      const { id, qty } = action.payload;
      if (qty < 1) {
        return state.filter((item) => item.id !== id);
      }
      return state.map((item) => (item.id === id ? { ...item, qty } : item));
    }

    case "CLEAR":
      return [];

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const totalPrice = useMemo(
    () => cart.reduce((sum, item) => sum + item.qty * item.price, 0),
    [cart]
  );

  return (
    <CartContext.Provider value={{ cart, dispatch, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);