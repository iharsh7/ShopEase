import axios from "axios";
import getPrice from "../extractprice/getprice";
const cheerio = require('cheerio');
const scrapeAmazon = async(url) => {
  if(!url) return;

  const username = "brd-customer-hl_5dd3b64f-zone-pricewise" ;
  const password = "9dj54pd60xkc" ;

  const port = 22225;
  const session_id = (1000000 * Math.random()) | 0;
  const options = {
    auth:{
        username: `${username}-session-${session_id}`,
        password,
    },
    host: 'brd.superproxy.io',
    port,
    rejectUnauthorized: false,
  }
  try{
    const response = await axios.get(url,options);
    const $ = cheerio.load(response.data);
    const title = $('#productTitle').text().trim();
    // const price = getPrice(
    //     $('.a-price aok-align-center reinventPricePriceToPayMargin priceToPay a-price-whole'),
    //     // $('a-price-whole')
    //     // $('.a-button-selected .a-color-base'),
    //     // $('.a-price.a-text-price')
    // );
    const price = $('#corePriceDisplay_desktop_feature_div  div[class="a-section a-spacing-none aok-align-center aok-relative"] span[class="a-price aok-align-center reinventPricePriceToPayMargin priceToPay"] span[class="a-price-whole"]').text().replace(/[^\d]/g,'');
    const discount = $('#corePriceDisplay_desktop_feature_div  div[class="a-section a-spacing-none aok-align-center aok-relative"] span[class="a-size-large a-color-price savingPriceOverride aok-align-center reinventPriceSavingsPercentageMargin savingsPercentage"]').text().replace(/[-%]/g,'');
    const currency = $('#corePriceDisplay_desktop_feature_div  div[class="a-section a-spacing-none aok-align-center aok-relative"] span[class="a-price aok-align-center reinventPricePriceToPayMargin priceToPay"] span[class="a-price-symbol"]').text();
    // alert(price)
    // const originalPrice = $('#corePriceDisplay_desktop_feature_div  div[class="a-section a-spacing-small aok-align-center"] span span[class="aok-relative"] span[class="a-size-small a-color-secondary aok-align-center basisPrice"] span[class="a-price a-text-price"] span[class="a-offscreen"]').text().replace(/[^\d.,]/g, '');
    const originalPrice = $('#corePriceDisplay_desktop_feature_div  div[class="a-section a-spacing-small aok-align-center"] span span[class="aok-relative"] span[class="a-size-small a-color-secondary aok-align-center basisPrice"] span[class="a-price a-text-price"] span[class="a-offscreen"]').text();
    const isAvailable = $('#availability span').text().trim();
    const image = $('#imgTagWrapperId img').attr().src;

    const scrapData = {
        url,
        title,
        price: Number(price) || price,
        discount: Number(discount) || 0,
        currency: currency || '$',
        originalPrice: (originalPrice) || price,
        isAvailable,
        image,
        priceHistory: [
          {price:Number(price)}
        ],
        lowestPrice: Number(price),
        highestPrice: Number(price),
        averagePrice: Number(price)
    }
    console.log(scrapData);
    return scrapData;
  }
  catch(err){
    console.log(err);
  }
}

export default scrapeAmazon