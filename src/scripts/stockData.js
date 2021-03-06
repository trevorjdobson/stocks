
import axios from 'axios'

const Get = {
  

  //single stock chart look up, range is 1d, 1m, 3m, 6m, ytd, 1y, 2y,5,
  singleStockChart(symbol, range){
    return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/${range}`)
        .then(res => {
          console.log('singleStockChart', res)
          return res;
      })
  },

  //data is symbols separated by commas i.e. fb,amzn,snap
  listLoad(symbols){
    let data = symbols.toString()
    
    return axios.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${data}&types=quote,news,chart&range=1m&last=5`)
        .then(res => {
          console.log('listLoad', res.data)
          let list = [];
        for (var i in res.data) {
          let obj = res.data[i]

          list.push(obj)
          }
        console.log(list)
        return list
        // this.setState({guestList: list})
        // console.log(this.state)

      })
  },

  singleStockQuote(symbol){
      return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
        .then(res => {
          console.log('singleStockQuote', res)
          return res
      }).catch(err => {
         console.log('errrrrrrrrrrrrr')
      })
      
  },

  // /news returns default number of 10 results, /last/${number} returns the number indicated, between 1 and 50
  singleStockNews(symbol){
   return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/news`)
        .then(res => {
          console.log('singleStockNews', res)
          return res
      })
  },

  singleStockPeers(symbol){
    return axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/peers`)
        .then(res => {
          console.log('singleStockPeers', res)
          return res
      })
  },


}

export default Get;