import React, { createContext, ReactNode, useState } from "react";

export interface CartContextProps {
  total: number;
  items: string[];
  addItem: (name: string) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState([] as string[]);

  const addItem = (name: string) => {
    setItems([...items, name]);
  };

  return (
    <CartContext.Provider value={{ total: items.length, items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};
