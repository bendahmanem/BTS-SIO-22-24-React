product = {
    name: 'test',
    unitPrice: 5
}

function calculateTotalPrice(product, quantity, discount) {
    const price = product.price * quantity;
    const  discountedAmount = price * discount;
    return price - discountedAmount;
}
