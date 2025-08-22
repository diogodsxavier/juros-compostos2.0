import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Search, Plus, Mail, Phone, MapPin, MoreHorizontal, User, ShoppingBag, Star } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  totalOrders: number;
  totalSpent: number;
  lastOrder: string;
  status: 'active' | 'inactive' | 'vip';
  avatar: string;
}

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  // Dados mock para clientes
  const mockCustomers: Customer[] = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao.silva@email.com',
      phone: '(11) 99999-9999',
      city: 'São Paulo, SP',
      totalOrders: 15,
      totalSpent: 12500.00,
      lastOrder: '25.07.2024',
      status: 'vip',
      avatar: 'JS'
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria.santos@email.com',
      phone: '(21) 88888-8888',
      city: 'Rio de Janeiro, RJ',
      totalOrders: 8,
      totalSpent: 6800.00,
      lastOrder: '24.07.2024',
      status: 'active',
      avatar: 'MS'
    },
    {
      id: '3',
      name: 'Pedro Costa',
      email: 'pedro.costa@email.com',
      phone: '(31) 77777-7777',
      city: 'Belo Horizonte, MG',
      totalOrders: 3,
      totalSpent: 2100.00,
      lastOrder: '20.07.2024',
      status: 'active',
      avatar: 'PC'
    },
    {
      id: '4',
      name: 'Ana Oliveira',
      email: 'ana.oliveira@email.com',
      phone: '(41) 66666-6666',
      city: 'Curitiba, PR',
      totalOrders: 22,
      totalSpent: 18900.00,
      lastOrder: '26.07.2024',
      status: 'vip',
      avatar: 'AO'
    },
    {
      id: '5',
      name: 'Carlos Ferreira',
      email: 'carlos.ferreira@email.com',
      phone: '(51) 55555-5555',
      city: 'Porto Alegre, RS',
      totalOrders: 5,
      totalSpent: 3500.00,
      lastOrder: '18.07.2024',
      status: 'inactive',
      avatar: 'CF'
    },
    {
      id: '6',
      name: 'Lucia Pereira',
      email: 'lucia.pereira@email.com',
      phone: '(81) 44444-4444',
      city: 'Recife, PE',
      totalOrders: 12,
      totalSpent: 9800.00,
      lastOrder: '23.07.2024',
      status: 'active',
      avatar: 'LP'
    }
  ];

  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-500',
    vip: 'bg-purple-500'
  };

  const statusLabels = {
    active: 'Ativo',
    inactive: 'Inativo',
    vip: 'VIP'
  };

  const filteredCustomers = mockCustomers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.city.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || customer.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleAddCustomer = () => {
    console.log('Adicionando novo cliente...');
  };

  const handleEditCustomer = (customerId: string) => {
    console.log('Editando cliente:', customerId);
  };

  const handleDeleteCustomer = (customerId: string) => {
    console.log('Deletando cliente:', customerId);
  };

  const handleContactCustomer = (customer: Customer) => {
    console.log('Contatando cliente:', customer.name);
  };

  return (
    <DashboardLayout>
      {/* Header da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Clientes
        </h1>
        <p className="text-slate-400 text-lg">
          Gerencie a base de clientes da sua loja
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total de Clientes</p>
              <p className="text-2xl font-bold text-white">{mockCustomers.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Clientes Ativos</p>
              <p className="text-2xl font-bold text-white">
                {mockCustomers.filter(c => c.status === 'active').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Clientes VIP</p>
              <p className="text-2xl font-bold text-white">
                {mockCustomers.filter(c => c.status === 'vip').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <Star className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Valor Total</p>
              <p className="text-2xl font-bold text-white">
                R$ {mockCustomers.reduce((sum, c) => sum + c.totalSpent, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-yellow-500" />
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
              placeholder="Buscar clientes..."
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
              <option value="active">Ativos</option>
              <option value="inactive">Inativos</option>
              <option value="vip">VIP</option>
            </select>

            <button
              onClick={handleAddCustomer}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar Cliente</span>
            </button>
          </div>
        </div>

        {/* Contador */}
        <div className="mt-4 text-sm text-slate-400">
          {filteredCustomers.length} clientes encontrados
        </div>
      </div>

      {/* Lista de clientes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredCustomers.map((customer) => (
          <div key={customer.id} className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:shadow-xl transition-all duration-200">
            {/* Header do card */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {customer.avatar}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{customer.name}</h3>
                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[customer.status]} text-white`}>
                    {statusLabels[customer.status]}
                  </span>
                </div>
              </div>
              <button className="text-slate-400 hover:text-white">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Informações de contato */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-4 h-4 text-slate-400" />
                <span className="text-sm">{customer.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="text-sm">{customer.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-sm">{customer.city}</span>
              </div>
            </div>

            {/* Estatísticas do cliente */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-white">{customer.totalOrders}</p>
                <p className="text-xs text-slate-400">Pedidos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-white">R$ {customer.totalSpent.toLocaleString()}</p>
                <p className="text-xs text-slate-400">Total Gasto</p>
              </div>
              <div className="text-center">
                <p className="text-sm font-medium text-white">{customer.lastOrder}</p>
                <p className="text-xs text-slate-400">Último Pedido</p>
              </div>
            </div>

            {/* Ações */}
            <div className="flex space-x-2">
              <button
                onClick={() => handleContactCustomer(customer)}
                className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>Contatar</span>
              </button>
              <button
                onClick={() => handleEditCustomer(customer.id)}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg text-sm transition-colors"
              >
                Editar
              </button>
              <button
                onClick={() => handleDeleteCustomer(customer.id)}
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm transition-colors"
              >
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Paginação */}
      <div className="flex items-center justify-center mt-8">
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

export default Customers;
