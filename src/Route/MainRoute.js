import React, { useEffect, useState } from 'react';
import "../App.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MainRoute() {
  let history = useHistory();
  const [data, setCryptolist] = useState([]);
  const [Records, Setrecords] = useState([]);

  useEffect(() => {
    // Function to fetch and update API data
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coinlore.net/api/tickers/?start=0&limit=30"
        );
        setCryptolist(response.data['data'])
        Setrecords(response.data['data']);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const intervalId = setInterval(fetchData, 5000);
    return () => clearInterval(intervalId);

  }, []);

  const filter = (event) => {
    Setrecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }




  return (
    <div className="App">
      <div id='header'>
        <div className='Search'>
          <input type='text' className='Form-control' placeholder='Search For Currencies....' onChange={filter} />
        </div>

        <div><h1>CRYPTOLAND</h1></div>
      </div>

      <div className='cryptolist'>
        {Records.map((coin) => {
          return (
            <div onClick={() => { history.push(`/Currency/${coin.id}`); }}>
              <h1>Name:{coin.name}</h1>
              <h1>price:{coin.price_usd}</h1>
              <h1>Rank:{coin.rank}</h1>
            </div>
          );
        })}
      </div>
    </div>

  );
}

export default MainRoute;
