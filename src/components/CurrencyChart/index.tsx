import React, { useEffect, useRef } from 'react';
import { createChart, ColorType, IChartApi } from 'lightweight-charts';
import { Unit } from '../../types/units';

type CurrencyChartProps = {
  fromUnit: Unit;
  toUnit: Unit;
  data: { time: string; value: number }[];
};

export default function CurrencyChart({ fromUnit, toUnit, data }: CurrencyChartProps) {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#9ca3af',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      },
      grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.1)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.1)' },
      },
      width: chartContainerRef.current.clientWidth,
      height: 200, // Reduced from 300 to 200
      rightPriceScale: {
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
      },
    });

    const lineSeries = chart.addLineSeries({
      color: '#e879f9',
      lineWidth: 2,
      crosshairMarkerVisible: true,
      crosshairMarkerRadius: 4, // Reduced from 6 to 4
      lineType: 0,
      priceLineVisible: false,
      lastValueVisible: true,
    });

    lineSeries.setData(data);

    // Add padding to the chart
    chart.timeScale().fitContent();

    chartRef.current = chart;

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
      <div className="text-sm text-gray-400 mb-2">
        {fromUnit.symbol}/{toUnit.symbol} Exchange Rate History - 30 Days
      </div>
      <div ref={chartContainerRef} className="mt-2" />
    </div>
  );
}