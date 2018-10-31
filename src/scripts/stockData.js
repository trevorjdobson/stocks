
import axios from 'axios'

const Get = {
  

  //single stock chart look up, range is 1d, 1m, 3m, 6m, ytd, 1y, 2y,5,
  singleStockChart(symbol, range){
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
        .then(res => {
          console.log('singleStockChart', res)
      })
  },

  //data is symbols separated by commas i.e. fb,amzn,snap
  listLoad(symbols){
    let data = symbols.toString()
    console.log(data)
    axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${data}&types=quote,news,chart&range=1m&last=5`)
        .then(res => {
          console.log('listLoad', res)
      })
  },

  singleStockQuote(symbol){
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
        .then(res => {
          console.log('singleStockQuote', res)
      })
  },

  // /news returns default number of 10 results, /last/${number} returns the number indicated, between 1 and 50
  singleStockNews(symbol){
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/news`)
        .then(res => {
          console.log('singleStockNews', res)
      })
  },

  singleStockPeers(symbol){
    axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/peers`)
        .then(res => {
          console.log('singleStockPeers', res)
      })
  },


}

export default Get;