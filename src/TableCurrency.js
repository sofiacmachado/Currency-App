import React from 'react';

export default function TableCurrency(props) {

    const {
        currencyOptions,
        onChangeCurrency,
        baseCurrency,
        rates
    } = props;

     return (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Base: <select value={baseCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))};
            </select></th>
              <th>1.00 {baseCurrency}</th>
              <th>INV. 1.00 {baseCurrency}</th>
            </tr>
          </thead>
          <tbody>{Object.keys(rates).map(toCurrency => (
        <tr key={toCurrency}>
            <td>{toCurrency}</td>
            <td>{rates[toCurrency]}</td>
            <td>{1/rates[toCurrency]}</td>
        </tr>
      ))};</tbody>
          
        </table>
      );
    };
