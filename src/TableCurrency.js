import React from 'react';
//import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";

export default function TableCurrency(props) {

    const {
        currencyOptions,
        onChangeCurrency,
        baseCurrency,
        rates
    } = props;

     return (
            <table className="table mt-5">
                <thead>
                    <tr>
                    <th className='th-currency'>Base: <select value={baseCurrency} onChange={onChangeCurrency}>
                        {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                        ))};
                    </select></th>
                    <th  className='th-currency'>1.00 {baseCurrency}</th>
                    <th  className='th-currency'>INV. 1.00 {baseCurrency}</th>
                    </tr>
                </thead>
                <tbody>{Object.keys(rates).map(toCurrency => (
                    <tr key={toCurrency}>
                        <td>{toCurrency}</td>
                        <td>{rates[toCurrency]}</td>
                        <td>{1/rates[toCurrency]}</td>
                    </tr>
                ))
                }</tbody>
          
            </table>
      );
    };
