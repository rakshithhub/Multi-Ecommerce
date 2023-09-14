export const getDiscountByPrice = (discountPercent,price) => { 
    const result = price - price * (discountPercent/100);
    return result.toFixed(2);
  }