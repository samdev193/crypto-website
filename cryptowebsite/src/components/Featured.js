import React, { useState, useEffect } from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import "./Featured.css";
import axios from "axios";

const Featured = () => {
  const [data, setData] = useState(null);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);
  if (!data) return null;
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
        <h2>
          Explore the top Crypto currencies like Bitcoin, Ethereum, Dogecoin and
          more
        </h2>
        <p>See all available assets: Cryptocurrencies and NFT's</p>
        <button className="btn">See More Coins</button>
      </div>

      <div className="right">
        {data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="top">
                <img src={item.image} alt="/" />
              </div>
              <div>
                <h5>{item.name}</h5>
                <p>${item.current_price.toLocaleString()}</p>
              </div>
              <span>
                <FiArrowUpRight />
                {item.price_change_percentage_24h < 0 ? (
                  <span className="red">
                    <FiArrowDown className="icon" />
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className="green">
                    <FiArrowUpRight className="icon" />
                    {item.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </span>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
};

export default Featured;
