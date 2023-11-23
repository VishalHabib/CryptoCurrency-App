import React, { useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useEffect } from "react";
import "../App.css";

export default function Currency() {
 let { id }= useParams();

 const [coin, setcoin]= useState({
name:"",
percent_change_1h:"",
percent_change_24h: "",
percent_change_7d:"",
price_btc: "",
price_usd:"",
rank: 0,
symbol: "",
tsupply: "",
volume24:0,  
});


 useEffect(()=> {
  axios.get(
    `https://api.coinlore.net/api/ticker/?id=${id}`
  ).then((response) => {
    setcoin({
name: response.data[0].name,
percent_change_1h:response.data[0].percent_change_1h,
percent_change_24h:response.data[0].percent_change_24h,
percent_change_7d: response.data[0].percent_change_7d,
price_btc: response.data[0].price_btc,
price_usd:response.data[0].price_usd,
rank: response.data[0].rank,
symbol: response.data[0].symbol,
tsupply: response.data[0].tsupply,
volume24: response.data[0].volume24,
});  
}
);
},[]);

  return (
    <div id='records'>
    <h1>Name:{coin.name}</h1>
    <h1>percent_change_1h:{coin.percent_change_1h}</h1>
    <h1>percent_change_24h:{coin.percent_change_24h}</h1>
    <h1>percent_change_7d:{coin.percent_change_7d}</h1>
    <h1>price_btc:{coin.price_btc}</h1>
    <h1>price_usd:{coin.price_usd}</h1>
    <h1>rank:{coin.rank}</h1>
    <h1>symbol:{coin.symbol}</h1>
    <h1>tsupply:{coin.tsupply}</h1>
    <h1>volume24:{coin.volume24}</h1>
    </div>
  )
}
