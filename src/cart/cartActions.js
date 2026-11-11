const addItem = (cartItems, product) => {
    if (!product) return cartItems

    const existingProduct = cartItems.find((existingProduct) => existingProduct.id === product.id);
    if (existingProduct) {
        const newQuantity = existingProduct.quantity + 1
        const updatedCartItems = updateQuantity(cartItems, existingProduct.id, newQuantity);
        return updatedCartItems;
    } else {
        const updatedCartItems = [
            ...cartItems,
            {
                ...product,
                quantity: 1
            }
        ]

        return updatedCartItems;
    } 
}

const removeItem = (cartItems, productId) => {
    const updatedCartItems = cartItems.filter((product) => product.id !== productId)

    return updatedCartItems;
}

const updateQuantity = (cartItems, productId, quantity) => {
    if (quantity <= 0) {
        const updatedCartItems = removeItem(cartItems, productId);
        return updatedCartItems;
    }

    const updatedCartItems = cartItems.map((product) => {
        if (product.id !== productId) return product;

        return {
            ...product, 
            quantity
        }
    })

    return updatedCartItems;
}

const clearCart = () => {
    return [];
}

export default { addItem, removeItem, updateQuantity, clearCart }