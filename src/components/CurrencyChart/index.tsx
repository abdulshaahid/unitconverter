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

    const isMobile = window.innerWidth < 768;
    const chartHeight = isMobile ? 120 : 140; // Further reduced height

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#9ca3af',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: isMobile ? 9 : 11, // Smaller font size
      },
      grid: {
        vertLines: { color: 'rgba(255, 255, 255, 0.1)' },
        horzLines: { color: 'rgba(255, 255, 255, 0.1)' },
      },
      width: chartContainerRef.current.clientWidth,
      height: chartHeight,
      rightPriceScale: {
        borderVisible: false,
        scaleMargins: {
          top: 0.15, // Reduced margins
          bottom: 0.15,
        },
      },
      timeScale: {
        borderVisible: false,
        timeVisible: true,
        secondsVisible: false,
        fixLeftEdge: true,
        fixRightEdge: true,
      },
    });

    const lineSeries = chart.addLineSeries({
      color: '#e879f9',
      lineWidth: isMobile ? 1 : 1.5, // Thinner lines
      crosshairMarkerVisible: true,
      crosshairMarkerRadius: 2, // Smaller markers
      lineType: 0,
      priceLineVisible: false,
      lastValueVisible: true,
    });

    lineSeries.setData(data);
    chart.timeScale().fitContent();

    chartRef.current = chart;

    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        const newIsMobile = window.innerWidth < 768;
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
          height: newIsMobile ? 120 : 140,
          layout: {
            fontSize: newIsMobile ? 9 : 11,
          },
        });
        chart.timeScale().fitContent();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, [data]);

  return (
    <div className="mt-2 p-2 bg-white/5 rounded-lg border border-white/10">
      <div className="text-xs text-gray-400 mb-1">
        {fromUnit.symbol}/{toUnit.symbol} - 30 Day History
      </div>
      <div ref={chartContainerRef} />
    </div>
  );
}