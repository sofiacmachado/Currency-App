import React, { useEffect, useState } from 'react';
import './App.css';
import { json, checkStatus } from './utils';
import Navbar from './Navbar';
import Footer from './Footer';

import CurrencyConverter from './CurrencyConverter';
import TableCurrency from './TableCurrency';

const host = 'https://altexchangerateapi.herokuapp.com/latest';


function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [rates, setRates] = useState({});

  let toAmount, fromAmount;
  if(amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }
  
  useEffect(() => {
    fetch(host)
    .then(checkStatus)
    .then(json)
    .then(data => {
      const firstCurrency = Object.keys(data.rates)[0]
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
      setFromCurrency(data.base)
      setToCurrency(firstCurrency)
      setExchangeRate(data.rates[firstCurrency])
      setRates(data.rates)
      setBaseCurrency(data.base)
    })
  }, [])
 
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${host}?from=${fromCurrency}&to=${toCurrency}`)
      .then(checkStatus)
      .then(json)
      .then(data => setExchangeRate(data.rates[toCurrency]))
    }
  }, [fromCurrency, toCurrency])


  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  function handleChangeBase(e) {
    setBaseCurrency(e.target.value)

    fetch(`${host}?from=${e.target.value}`)
      .then(checkStatus)
      .then(json)
      .then(data => setRates(data.rates))
  }


  return (
    <div>
      <Navbar />
      <CurrencyConverter
      currencyOptions={currencyOptions}
      selectCurrency={fromCurrency}
      onChangeCurrency={e => setFromCurrency(e.target.value)}
      onChangeAmount={handleFromAmountChange}
      amount={fromAmount} 
      />
      
      <CurrencyConverter
      currencyOptions={currencyOptions}
      selectCurrency={toCurrency}
      onChangeCurrency={e => setToCurrency(e.target.value)}
      onChangeAmount={handleToAmountChange}
      amount={toAmount}
      />
      <TableCurrency currencyOptions={currencyOptions}
      onChangeCurrency={handleChangeBase}
      baseCurrency={baseCurrency}
      rates={rates}
      />
      
      <Footer />
    </div>
  );
}

export default App;
