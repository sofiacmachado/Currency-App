import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
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
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
 // const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [rates, setRates] = useState({});

  let toAmount, fromAmount;
    fromAmount = amount;
    toAmount = amount * exchangeRate;


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
  //  setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
//    setAmountInFromCurrency(false)
  }

  function handleChangeBase(e) {
    setBaseCurrency(e.target.value)

    fetch(`${host}?from=${e.target.value}`)
      .then(checkStatus)
      .then(json)
      .then(data => setRates(data.rates))
  }

const TheCurrencyConverter = () => {
  return (<div className='currency-converter-container my-5'>
      <h2 className='title'>Currency Converter</h2>
      <div className="d-flex flex-column flex-sm-row justify-content-center">
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
      </div>
  </div>);
}


const TheTableCurrency = () => {
  return (<div className='container d-flex justify-content-center my-5'>
     <div className='table-currency py-5 px-5'>
        <h2 className='title'>Exchange Rates</h2>
          <TableCurrency currencyOptions={currencyOptions}
              onChangeCurrency={handleChangeBase}
              baseCurrency={baseCurrency}
              rates={rates}
              />
      </div>
    </div>);
}

  return (
    <div>
    <Router>
        <Navbar />
        <Routes>
          <Route path="CurrencyConverter" element={<TheCurrencyConverter />} />
          <Route path="TableCurrency" element={<TheTableCurrency />} />
          <Route path="*" element={<TheCurrencyConverter />} />
        </Routes>
    </Router>
        <Footer />
      </div>
  );
}

export default App;
