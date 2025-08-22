import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import MetricCard from '../components/MetricCard';
import StatCard from '../components/StatCard';
import RevenueChart from '../components/RevenueChart';
import CategoryChart from '../components/CategoryChart';
import { mockDashboardData } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { metrics, revenueData, categoryData, orderStats } = mockDashboardData;

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Olá, Barbara! 👋
        </h1>
        <p className="text-slate-400 text-lg">
          Veja o que está acontecendo na sua loja este mês.
        </p>
      </div>

      {/* Metrics Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <MetricCard metric={metrics.totalRevenue} />
        <MetricCard metric={metrics.totalOrders} />
        <MetricCard metric={metrics.totalRefund} />
        <MetricCard metric={metrics.netProfit} />
      </div>

      {/* Charts and Stats Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Revenue Chart - Takes 2 columns */}
        <div className="lg:col-span-2">
          <RevenueChart data={revenueData} />
        </div>
        
        {/* Stats Cards - Takes 1 column */}
        <div className="space-y-6">
          <StatCard
            value={orderStats.totalOrders}
            label="orders"
            subtitle={`${orderStats.awaitingConfirmation} orders are awaiting confirmation`}
          />
          <StatCard
            value={orderStats.totalCustomers}
            label="customers"
            subtitle={`${orderStats.waitingResponse} customers are waiting for response`}
          />
        </div>
      </div>

      {/* Category Chart Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryChart data={categoryData} />
        
        {/* Additional Info Card */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
          <h3 className="text-xl font-bold text-white mb-4">Ações Rápidas</h3>
          <div className="space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Ver Todos os Pedidos
            </button>
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Gerar Relatório
            </button>
            <button className="w-full bg-slate-700 hover:bg-slate-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Gerenciar Produtos
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
