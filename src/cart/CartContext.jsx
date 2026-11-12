import { useState } from "react";
import cartActions from "./cartActions.js";
import { CartContext } from "./CartContext.js";

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const handleAddItem = (product) => {
        setCartItems((currentCartItems) =>
            cartActions.addItem(currentCartItems, product)
        );
    };

    const handleRemoveItem = (productId) => {
        setCartItems((currentCartItems) =>
            cartActions.removeItem(currentCartItems, productId)
        );
    };

    const handleUpdateQuantity = (productId, quantity) => {
        setCartItems((currentCartItems) =>
            cartActions.updateQuantity(
                currentCartItems,
                productId,
                quantity
            )
        );
    };

    const handleClearCart = () => {
        setCartItems(() => cartActions.clearCart());
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                handleAddItem,
                handleRemoveItem,
                handleUpdateQuantity,
                handleClearCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
