function amountOfPurchases(archivSum) {
  let totalAmount = 0;
  archivSum.forEach(i => {
    totalAmount += i;
  });
  return totalAmount;
}

let purchaseAmounts = [10000, 20000, 30000];
console.log(amountOfPurchases(purchaseAmounts));