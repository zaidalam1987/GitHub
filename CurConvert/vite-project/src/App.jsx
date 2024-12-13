import React, { useState, useEffect } from 'react';
function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('PKR');
  const [rate, setRate] = useState(1);
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then((res) => res.json())
      .then((data) => {setCurrencies(Object.keys(data.rates)); 
        setRate(data.rates[toCurrency]); 
      });
  }, [toCurrency]);

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((res) => res.json())
        .then((data) => setRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  const convert = () => (amount * rate).toFixed(2);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Currency Converter</h2>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <span> to </span>

      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>

      <button onClick={convert}> Convert </button>

      {amount && (
        <h3>
          {amount} {fromCurrency} = {convert()} {toCurrency}
        </h3>
      )}
    </div>
  );
}

export default CurrencyConverter;
