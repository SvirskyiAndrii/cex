//@ts-nocheck
import styles from './styles.module.scss';
import { createChart, CrosshairMode } from 'lightweight-charts';
import { useEffect } from 'react';

const div = document.createElement('div');

const chart = createChart(div, {
  width: window.innerWidth * 0.6,
  height: 500,
  layout: {
    backgroundColor: '#161631',
    textColor: '#fbfbfb',
  },
  grid: {
    vertLines: {
      color: '#334158',
    },
    horzLines: {
      color: '#334158',
    },
  },
  crosshair: {
    mode: CrosshairMode.Normal,
  },
  priceScale: {
    borderColor: '#485c7b',
  },
  timeScale: {
    borderColor: '#ffffff',
  },
  watermark: {
    text: 'CEX',
    fontSize: 256,
    color: 'rgba(256, 256, 256, 0.1)',
    visible: true,
  },
});

const candleSeries = chart.addCandlestickSeries({
  upColor: '#4bffb5',
  downColor: '#ff4976',
  borderDownColor: '#ff4976',
  borderUpColor: '#4bffb5',
  wickDownColor: '#838ca1',
  wickUpColor: '#838ca1',
});

const volumeSeries = chart.addHistogramSeries({
  color: '#385263',
  lineWidth: 2,
  priceFormat: {
    type: 'volume',
  },
  overlay: true,
  scaleMargins: {
    top: 0.9,
    bottom: 0,
  },
});

for (let i = 0; i < 150; i++) {
  const bar = nextBar();
  candleSeries.update(bar);
  volumeSeries.update(bar);
}

resize();

setInterval(() => {
  const bar = nextBar();
  candleSeries.update(bar);
  volumeSeries.update(bar);
}, 5000);

window.addEventListener('resize', resize, false);

function resize() {
  chart.applyOptions({ width: window.innerWidth * 0.6, height: 500 });

  setTimeout(() => chart.timeScale().fitContent(), 0);
}

function nextBar() {
  if (!nextBar.date) nextBar.date = new Date(2020, 0, 0);
  if (!nextBar.bar) nextBar.bar = { open: 100, high: 104, low: 98, close: 103 };

  nextBar.date.setDate(nextBar.date.getDate() + 1);
  nextBar.bar.time = {
    year: nextBar.date.getFullYear(),
    month: nextBar.date.getMonth() + 1,
    day: nextBar.date.getDate(),
  };

  let old_price = nextBar.bar.close;
  let volatility = 0.1;
  let rnd = Math.random();
  let change_percent = 2 * volatility * rnd;

  if (change_percent > volatility) change_percent -= 2 * volatility;

  let change_amount = old_price * change_percent;
  nextBar.bar.open = nextBar.bar.close;
  nextBar.bar.close = old_price + change_amount;
  nextBar.bar.high =
    Math.max(nextBar.bar.open, nextBar.bar.close) +
    Math.abs(change_amount) * Math.random();
  nextBar.bar.low =
    Math.min(nextBar.bar.open, nextBar.bar.close) -
    Math.abs(change_amount) * Math.random();
  nextBar.bar.value = Math.random() * 100;
  nextBar.bar.color =
    nextBar.bar.close < nextBar.bar.open ? '#ff809f' : '#6bffc1';

  return nextBar.bar;
}

export const Charts = () => {
  useEffect(() => {
    const test = document.getElementById('chart-container');
    test?.appendChild(div);
  }, []);
  return <div id='chart-container' className={styles.charts}></div>;
};
