import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Download, TrendingUp, TrendingDown, DollarSign, ShoppingBag, Users, BarChart3 } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Reports: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Dados mock para relatórios
  const salesData = [
    { month: 'Jan', sales: 45000, orders: 120, customers: 85 },
    { month: 'Fev', sales: 52000, orders: 135, customers: 92 },
    { month: 'Mar', sales: 48000, orders: 128, customers: 88 },
    { month: 'Abr', sales: 61000, orders: 155, customers: 105 },
    { month: 'Mai', sales: 58000, orders: 148, customers: 98 },
    { month: 'Jun', sales: 67000, orders: 168, customers: 112 },
    { month: 'Jul', sales: 72000, orders: 180, customers: 120 },
    { month: 'Ago', sales: 75000, orders: 190, customers: 125 }
  ];

  const categoryData = [
    { name: 'Laptops', value: 35, color: '#3b82f6' },
    { name: 'Smartphones', value: 28, color: '#f59e0b' },
    { name: 'Tablets', value: 18, color: '#10b981' },
    { name: 'Acessórios', value: 12, color: '#8b5cf6' },
    { name: 'Smartwatches', value: 7, color: '#ef4444' }
  ];

  const topProducts = [
    { name: 'MacBook Air M2', sales: 45, revenue: 405000 },
    { name: 'iPhone 15 Pro', sales: 38, revenue: 266000 },
    { name: 'iPad Air', sales: 32, revenue: 176000 },
    { name: 'AirPods Pro', sales: 28, revenue: 70000 },
    { name: 'Apple Watch Series 9', sales: 25, revenue: 100000 }
  ];

  const handleExportReport = (type: string) => {
    console.log(`Exportando relatório: ${type}`);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-3 shadow-xl">
          <p className="text-white font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-blue-400 font-bold">
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <DashboardLayout>
      {/* Header da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Relatórios
        </h1>
        <p className="text-slate-400 text-lg">
          Analise o desempenho da sua loja com relatórios detalhados
        </p>
      </div>

      {/* Controles */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="week">Última Semana</option>
              <option value="month">Último Mês</option>
              <option value="quarter">Último Trimestre</option>
              <option value="year">Último Ano</option>
            </select>
            <span className="text-slate-400 text-sm">
              Período selecionado: {selectedPeriod === 'month' ? 'Último Mês' : selectedPeriod}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => handleExportReport('sales')}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Exportar Vendas</span>
            </button>
            <button
              onClick={() => handleExportReport('full')}
              className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Relatório Completo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Receita Total</p>
              <p className="text-2xl font-bold text-white">R$ 478.000</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span className="text-sm text-green-400">+12.5%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total de Pedidos</p>
              <p className="text-2xl font-bold text-white">1.224</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span className="text-sm text-green-400">+8.2%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Novos Clientes</p>
              <p className="text-2xl font-bold text-white">825</p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                <span className="text-sm text-green-400">+15.3%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Ticket Médio</p>
              <p className="text-2xl font-bold text-white">R$ 390</p>
              <div className="flex items-center mt-2">
                <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
                <span className="text-sm text-red-400">-2.1%</span>
              </div>
            </div>
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Gráficos principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de vendas */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Evolução de Vendas</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="sales" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Gráfico de categorias */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-6">Vendas por Categoria</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Legenda */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {categoryData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-slate-300">{item.name}</span>
                <span className="text-sm text-slate-400 ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gráfico de pedidos e clientes */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-6">Pedidos vs Clientes</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="orders" stroke="#3b82f6" strokeWidth={2} />
              <Line type="monotone" dataKey="customers" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full" />
            <span className="text-sm text-slate-300">Pedidos</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <span className="text-sm text-slate-300">Clientes</span>
          </div>
        </div>
      </div>

      {/* Top produtos */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Top 5 Produtos</h3>
        <div className="space-y-4">
          {topProducts.map((product, index) => (
            <div key={product.name} className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-white font-medium">{product.name}</h4>
                  <p className="text-slate-400 text-sm">{product.sales} unidades vendidas</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-bold">R$ {product.revenue.toLocaleString()}</p>
                <p className="text-slate-400 text-sm">Receita total</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resumo executivo */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mt-8">
        <h3 className="text-xl font-bold text-white mb-4">Resumo Executivo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Pontos Positivos</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Crescimento consistente nas vendas (+12.5%)</li>
              <li>• Aumento na base de clientes (+15.3%)</li>
              <li>• Laptops liderando as vendas (35% do total)</li>
              <li>• Boa performance em agosto (R$ 75.000)</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Áreas de Atenção</h4>
            <ul className="space-y-2 text-slate-300">
              <li>• Ticket médio em queda (-2.1%)</li>
              <li>• Smartwatches com baixa performance (7%)</li>
              <li>• Necessidade de estratégias para acessórios</li>
              <li>• Foco em conversão de clientes</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
