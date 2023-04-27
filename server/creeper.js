// 请求 url -> html（信息） -> 解析html
const axios = require('axios');
const cheerio = require('cheerio');

const webScraper = async () => {

  const html = await axios.get('http://bang.dangdang.com/books/newhotsales');
  const $ = await cheerio.load(html.data);
  let data = [];

  $('.bang_list li').each(function(){
      // this 循环时 指向当前item
      // 当前item下的title
      // 相当于this.querySelector 
    const title = $('.title', this).text();
    const price = $('.price_n',this).text();
    const pic = $('.pic img',this).attr('src');

    data.push({
     title
   })
  })

  return data
}

module.exports = webScraper
