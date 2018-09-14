import axios from 'axios';
const API_KEY = '5VM6S50OVD52TS9O';
const ROOT_URL = `https://www.alphavantage.co/query?`

export const FETCH_STOCK = 'FETCH_STOCK';

export function fetchStock(stock){
    const url = `${ROOT_URL}function=TIME_SERIES_DAILY&symbol=${stock}&outputsize=compact&apikey=${API_KEY}`
    const request = axios.get(url)
    console.log(request)
    return{
        type: FETCH_STOCK,
        payload: request
    };
}
