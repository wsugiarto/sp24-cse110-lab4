// function sumValues(num1, num2, add) {
//     if (add) {
//       const result = 0;
//       result = num1 + num2;
//       console.log('values added: ', result);
//     } else return;
  
//     console.log('final result: ', result);
//   }
  
//   sumValues(10, 10, true);

// Question 1
// function discountPrices(prices, discount) {
//     let discounted = [];
//     let finalPrice = 0;
  
//     for (let i = 0; i < prices.length; i++) {
//       let discountedPrice = prices[i] * (1 - discount);
//       finalPrice = Math.round(discountedPrice * 100) / 100;
//       discounted.push(finalPrice);
//     }
  
//     //console.log(i);
//     //console.log(discountedPrice);
//     //console.log(finalPrice);
  
//     return discounted;
//   }
  
//   discountPrices([100, 200, 300], 0.5);


// Question 9
function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;
  
    for (let i = 0; i < length; i++) {
      const discountedPrice = prices[i] * (1 - discount);
      discounted.push(discountedPrice);
    }
  
    //console.log(i);
    //console.log(length);
    console.log(discounted);
    return discounted;
  }
  
  discountPrices([100, 200, 300], 0.5);
  