import React from 'react';
import type { Metric } from '../types/dashboard';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  metric: Metric;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric }) => {
  const formatValue = (value: number) => {
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
  };

  const formatChange = (change: number) => {
    const sign = change > 0 ? '+' : '';
    return `${sign}${change}%`;
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-slate-300 text-sm font-medium uppercase tracking-wide">
          {metric.label}
        </h3>
        <div className={`
          p-2 rounded-lg
          ${metric.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}
        `}>
          {metric.trend === 'up' ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
        </div>
      </div>
      
      <div className="mb-2">
        <span className="text-3xl font-bold text-white">
          {formatValue(metric.value)}
        </span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`
          text-sm font-medium
          ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}
        `}>
          {formatChange(metric.change)}
        </span>
        <span className="text-xs text-slate-400">
          {metric.description}
        </span>
      </div>
    </div>
  );
};

export default MetricCard;
