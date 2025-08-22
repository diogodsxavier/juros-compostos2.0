import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Search, Download, Plus, MoreHorizontal } from 'lucide-react';
import type { Order } from '../types/dashboard';

const OrderList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Dados mock para pedidos
  const mockOrders: Order[] = [
    {
      id: 'PRB8647',
      customer: 'João Silva',
      category: 'Laptops',
      price: 1193.38,
      date: '25.07.2024',
      payment: 'PayPal',
      status: 'on-way'
    },
    {
      id: 'PRB8648',
      customer: 'Maria Santos',
      category: 'Smartphones',
      price: 899.99,
      date: '24.07.2024',
      payment: 'Cartão de Crédito',
      status: 'delivered'
    },
    {
      id: 'PRB8649',
      customer: 'Pedro Costa',
      category: 'Acessórios',
      price: 299.50,
      date: '23.07.2024',
      payment: 'PIX',
      status: 'new'
    },
    {
      id: 'PRB8650',
      customer: 'Ana Oliveira',
      category: 'Laptops',
      price: 1599.99,
      date: '22.07.2024',
      payment: 'Boleto',
      status: 'awaiting'
    },
    {
      id: 'PRB8651',
      customer: 'Carlos Ferreira',
      category: 'Smartphones',
      price: 1299.99,
      date: '21.07.2024',
      payment: 'PayPal',
      status: 'delivered'
    }
  ];

  const statusColors = {
    new: 'bg-blue-500',
    awaiting: 'bg-orange-500',
    'on-way': 'bg-yellow-500',
    delivered: 'bg-green-500'
  };

  const statusLabels = {
    new: 'Novo',
    awaiting: 'Aguardando',
    'on-way': 'A Caminho',
    delivered: 'Entregue'
  };

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleExport = () => {
    // Implementar exportação
    console.log('Exportando pedidos...');
  };

  const handleAddOrder = () => {
    // Implementar adição de pedido
    console.log('Adicionando novo pedido...');
  };

  return (
    <DashboardLayout>
      {/* Header da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Lista de Pedidos
        </h1>
        <p className="text-slate-400 text-lg">
          Gerencie todos os pedidos da sua loja
        </p>
      </div>

      {/* Cards de status */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Novos Pedidos</p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Aguardando Aceitação</p>
              <p className="text-2xl font-bold text-white">20</p>
            </div>
            <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">A Caminho</p>
              <p className="text-2xl font-bold text-white">57</p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Entregues</p>
              <p className="text-2xl font-bold text-white">98</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Controles e filtros */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Busca */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Buscar pedidos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filtros e ações */}
          <div className="flex items-center space-x-3">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todos os Status</option>
              <option value="new">Novos</option>
              <option value="awaiting">Aguardando</option>
              <option value="on-way">A Caminho</option>
              <option value="delivered">Entregues</option>
            </select>

            <button
              onClick={handleExport}
              className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Exportar</span>
            </button>

            <button
              onClick={handleAddOrder}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar Pedido</span>
            </button>
          </div>
        </div>

        {/* Contador */}
        <div className="mt-4 text-sm text-slate-400">
          {filteredOrders.length} pedidos encontrados
        </div>
      </div>

      {/* Tabela de pedidos */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Número do Pedido
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Cliente
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Categoria
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Preço
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Pagamento
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-300 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-slate-800 divide-y divide-slate-700">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-700 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-slate-600 bg-slate-700 text-blue-600 focus:ring-blue-500" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {order.category}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    R$ {order.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    {order.payment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[order.status]} text-white`}>
                      {statusLabels[order.status]}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-300">
                    <button className="text-slate-400 hover:text-white">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-slate-400">
          Mostrando 1 a 10 de {filteredOrders.length} resultados
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm text-slate-400 hover:text-white disabled:opacity-50" disabled>
            Anterior
          </button>
          <span className="px-3 py-2 text-sm text-white bg-blue-600 rounded-lg">1</span>
          <button className="px-3 py-2 text-sm text-slate-400 hover:text-white">
            Próximo
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default OrderList;
