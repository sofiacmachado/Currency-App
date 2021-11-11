import React , { useEffect } from 'react';
import Chart from 'chart.js/auto';

let theChart;
let chartElement = React.createRef();



export function createChart(base, quote, data) {
    if (data == null || chartElement.current == null) {
        return;
    }
    if (data.error) {
        throw new Error(data.error);
    }
    const chartLabels = Object.keys(data.rates);
    const chartData = Object.values(data.rates).map(rate => rate[quote]);
    const chartLabel = `${base}/${quote}`;
    const chartRef = chartElement.current.getContext("2d");


    if (typeof theChart !== "undefined") {
        theChart.destroy();
    }
    theChart = new Chart(chartRef, {
        type: 'line',
        data: {
            labels: chartLabels,
            datasets: [
            {
                label: chartLabel,
                data: chartData,
                fill: false,
                tension: 0,
            }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}


export default function CurrencyCharts(props) {

    const {
         currencyOptions,
         historyRates,
         selectFromCurrency,
         selectToCurrency,
         onChangeFromCurrency,
         onChangeToCurrency
     } = props;

     useEffect(() => {
        createChart(selectFromCurrency, selectToCurrency, historyRates)
     })
 
     return (
        <div>
            <div className="d-flex flex-row justify-content-center">
                <select className='btn btn-currency dropdown-toggle' value={selectFromCurrency} onChange={onChangeFromCurrency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))};
                </select>
                <select className='btn btn-currency dropdown-toggle' value={selectToCurrency} onChange={onChangeToCurrency}>
                    {currencyOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))};
                </select>
            </div>
            <div id="myChart">
                <canvas  ref={chartElement}></canvas>
            </div>
        </div>
     );
 }