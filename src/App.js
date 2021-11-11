import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { json, checkStatus } from './utils';
import Navbar from './Navbar';
import Footer from './Footer';
import CurrencyConverter from './CurrencyConverter';
import TableCurrency from './TableCurrency';
import CurrencyCharts, { createChart } from './CurrencyCharts';
 
const host = 'https://altexchangerateapi.herokuapp.com/latest';
const hostBase = 'https://altexchangerateapi.herokuapp.com';

const endDate = new Date().toISOString().split('T')[0];
const startDate = new Date((new Date).getTime() - (30 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];

function App() {

  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState(1);
  const [amount, setAmount] = useState(1);
 // const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [rates, setRates] = useState({});
  const [historyRates, setHistoryRates] = useState(null);

  let fromAmount = amount;
  let toAmount = amount * exchangeRate;


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
  }, []);
 
  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      if (fromCurrency == toCurrency) {
        setExchangeRate(1.0)
        setHistoryRates(null);
      } else {
        // first `fetch` to get exchange rates for a given currency pair
        fetch(`${host}?from=${fromCurrency}&to=${toCurrency}`)
        .then(checkStatus)
        .then(json)
        .then(data => setExchangeRate(data.rates[toCurrency]));
        // second `fetch` to get the history of exchange rates for the same pair
        // url example: ${host}/2019-01-01..2019-01-30?from=USD&to=JPY
        fetch(`${hostBase}/${startDate}..${endDate}?from=${fromCurrency}&to=${toCurrency}`)
        .then(checkStatus)
        .then(json)
        .then(data => {
          setHistoryRates(data);
          createChart(fromCurrency, toCurrency, data)
        })
        .catch(error => console.error(error.message));
      }
    }
  }, [fromCurrency, toCurrency]);


  function handleFromAmountChange(e) {
    setAmount(e.target.value)
  //  setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
//    setAmountInFromCurrency(false)
  }

  function handleChangeBase(e) {
    setBaseCurrency(e.target.value);
    fetch(`${host}?from=${e.target.value}`)
    .then(checkStatus)
    .then(json)
    .then(data => setRates(data.rates));
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

const TheCurrencyCharts = () => {
  return (<CurrencyCharts
    currencyOptions={currencyOptions}
    historyRates={historyRates}
    selectFromCurrency={fromCurrency}
    selectToCurrency={toCurrency}
    onChangeFromCurrency={e => setFromCurrency(e.target.value)}
    onChangeToCurrency={e => setToCurrency(e.target.value)}
  />);
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
          <Route path="CurrencyCharts" element={<TheCurrencyCharts />} />
          <Route path="*" element={<TheCurrencyConverter />} />
        </Routes>
    </Router>
        <Footer />
      </div>
  );
}

export default App;
