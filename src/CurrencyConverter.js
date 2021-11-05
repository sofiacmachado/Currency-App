import React from 'react';

export default function CurrencyConverter(props) {

   const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        OnChangeAmount,
        amount
    } = props;

    return (
        <div>
            <input type='number' className='input' value={amount} onChange={OnChangeAmount} />
            <select value={selectCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))};
            </select>
        </div>
    )
}
