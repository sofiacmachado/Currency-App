import React from 'react';

export default function TableCurrency(props) {

   /*  const rows = props.currencyTable.map(currency => (
    currencyOptions={currencyOptions}
    selectCurrency={fromCurrency}
    onChangeCurrency={e => setFromCurrency(e.target.value)}
    onChangeAmount={handleFromAmountChange}
    amount={fromAmount}

    <tr key={currencyOptions}>
      <th>{FromAmount}</th>
      <td>{fromAmount}</td>
    </tr>)) */
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
