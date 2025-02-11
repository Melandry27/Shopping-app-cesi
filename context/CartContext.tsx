import React, { createContext, ReactNode, useState } from "react";

export interface CartContextProps {
  total: number;
  items: object[];
  totalPrice: number;
  addItem: (name: object) => void;
  removeItem: (index: number) => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState([] as object[]);

  const addItem = (item: object) => {
    setItems([...items, item]);
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item?.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        total: items.length,
        totalPrice: getTotalPrice(),
        items,
        addItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
