function calculateTotalPriceTs (product, quantity, discount) {
    const price = product.price * quantity;
    const  discountedAmount = price * discount;
    return price - discountedAmount;
}
