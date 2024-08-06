import priceHistory from '../scrapper/page'
export function getHighestPrice(priceList) {
    let highestPrice = priceList[0];
  
    for (let i = 0; i < priceList.length; i++) {
      if (priceList[i].price > highestPrice.price) {
        highestPrice = priceList[i];
      }
    }
  
    return highestPrice.price;
  }
  
  export function getLowestPrice(priceList) {
    console.log(priceList[0]);
    let lowestPrice = priceList[0];
  
    for (let i = 0; i < priceList.length; i++) {
      if (priceList[i].price < lowestPrice.price) {
        lowestPrice = priceList[i];
      }
    }
  
    return lowestPrice.price;
  }
  
  export function getAveragePrice(priceList) {
    const sumOfPrices = priceList.reduce((acc, curr) => acc + curr.price, 0);
    let sum=0;
    for(let i=0;i<priceList.length;i++){
      sum = sum + priceList[i].price;
    }
    const averagePrice = sum / priceList.length;
  
    return averagePrice;
  }