import React from 'react';

interface StatCardProps {
  value: number;
  label: string;
  subtitle: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, subtitle }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl transition-all duration-200 hover:shadow-2xl hover:scale-[1.02]">
      <div className="text-center">
        <div className="text-3xl font-bold text-white mb-2">
          {value}
        </div>
        <div className="text-slate-300 font-medium mb-1">
          {label}
        </div>
        <div className="text-xs text-slate-400">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
