import React from 'react';

export default function CurrencyConverter(props) {

   const {
        currencyOptions,
        selectCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;

    return (
        <div className='mx-3 my-3 d-flex align-items-center mt-5'>
            <input type='number' className='input input-currency' value={amount} onChange={onChangeAmount} />
            <select className='btn btn-currency dropdown-toggle' value={selectCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))};
            </select>
        </div>
    )
}
