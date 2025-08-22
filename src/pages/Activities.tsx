import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Clock, User, Package, DollarSign, TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

interface Activity {
  id: string;
  type: 'order' | 'payment' | 'user' | 'system';
  title: string;
  description: string;
  timestamp: string;
  status: 'success' | 'warning' | 'error' | 'info';
  user?: string;
  amount?: number;
}

const Activities: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  // Dados mock para atividades
  const mockActivities: Activity[] = [
    {
      id: '1',
      type: 'order',
      title: 'Novo Pedido Recebido',
      description: 'João Silva fez um pedido de MacBook Air M2',
      timestamp: '2024-08-22 14:30:25',
      status: 'success',
      user: 'João Silva',
      amount: 8999.99
    },
    {
      id: '2',
      type: 'payment',
      title: 'Pagamento Confirmado',
      description: 'Pagamento via PIX confirmado para pedido #PRB8647',
      timestamp: '2024-08-22 14:25:10',
      status: 'success',
      amount: 1193.38
    },
    {
      id: '3',
      type: 'user',
      title: 'Novo Cliente Cadastrado',
      description: 'Ana Oliveira se cadastrou na plataforma',
      timestamp: '2024-08-22 14:20:45',
      status: 'info',
      user: 'Ana Oliveira'
    },
    {
      id: '4',
      type: 'system',
      title: 'Produto com Estoque Baixo',
      description: 'AirPods Pro está com apenas 2 unidades em estoque',
      timestamp: '2024-08-22 14:15:30',
      status: 'warning'
    },
    {
      id: '5',
      type: 'order',
      title: 'Pedido Cancelado',
      description: 'Carlos Ferreira cancelou pedido #PRB8645',
      timestamp: '2024-08-22 14:10:15',
      status: 'error',
      user: 'Carlos Ferreira',
      amount: 299.99
    },
    {
      id: '6',
      type: 'payment',
      title: 'Reembolso Processado',
      description: 'Reembolso de R$ 1.299,99 processado com sucesso',
      timestamp: '2024-08-22 14:05:20',
      status: 'success',
      amount: 1299.99
    },
    {
      id: '7',
      type: 'order',
      title: 'Pedido Entregue',
      description: 'Pedido #PRB8640 foi entregue com sucesso',
      timestamp: '2024-08-22 13:45:10',
      status: 'success',
      amount: 5499.99
    },
    {
      id: '8',
      type: 'system',
      title: 'Backup Automático',
      description: 'Backup dos dados realizado automaticamente',
      timestamp: '2024-08-22 13:30:00',
      status: 'info'
    }
  ];

  const statusColors = {
    success: 'bg-green-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  const statusIcons = {
    success: CheckCircle,
    warning: AlertCircle,
    error: XCircle,
    info: Clock
  };

  const typeIcons = {
    order: Package,
    payment: DollarSign,
    user: User,
    system: TrendingUp
  };

  const typeLabels = {
    order: 'Pedido',
    payment: 'Pagamento',
    user: 'Usuário',
    system: 'Sistema'
  };

  const filteredActivities = mockActivities.filter(activity => {
    if (selectedFilter === 'all') return true;
    return activity.type === selectedFilter;
  });

  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (diffMins < 1) return 'Agora há pouco';
    if (diffMins < 60) return `${diffMins} min atrás`;
    if (diffHours < 24) return `${diffHours}h atrás`;
    return `${diffDays} dias atrás`;
  };

  return (
    <DashboardLayout>
      {/* Header da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Atividades Recentes
        </h1>
        <p className="text-slate-400 text-lg">
          Acompanhe todas as atividades da sua loja em tempo real
        </p>
      </div>

      {/* Estatísticas das atividades */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total de Atividades</p>
              <p className="text-2xl font-bold text-white">{mockActivities.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Pedidos</p>
              <p className="text-2xl font-bold text-white">
                {mockActivities.filter(a => a.type === 'order').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-green-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Pagamentos</p>
              <p className="text-2xl font-bold text-white">
                {mockActivities.filter(a => a.type === 'payment').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-purple-500" />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Alertas</p>
              <p className="text-2xl font-bold text-white">
                {mockActivities.filter(a => a.status === 'warning' || a.status === 'error').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 mb-6">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            Todas as Atividades
          </button>
          <button
            onClick={() => setSelectedFilter('order')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'order'
                ? 'bg-green-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            Pedidos
          </button>
          <button
            onClick={() => setSelectedFilter('payment')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'payment'
                ? 'bg-purple-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            Pagamentos
          </button>
          <button
            onClick={() => setSelectedFilter('user')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            Usuários
          </button>
          <button
            onClick={() => setSelectedFilter('system')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedFilter === 'system'
                ? 'bg-yellow-600 text-white'
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
            }`}
          >
            Sistema
          </button>
        </div>
      </div>

      {/* Lista de atividades */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">
          Atividades Recentes ({filteredActivities.length})
        </h3>

        <div className="space-y-4">
          {filteredActivities.map((activity) => {
            const StatusIcon = statusIcons[activity.status];
            const TypeIcon = typeIcons[activity.type];

            return (
              <div
                key={activity.id}
                className="flex items-start space-x-4 p-4 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors"
              >
                {/* Ícone de status */}
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${statusColors[activity.status]}/20
                `}>
                  <StatusIcon className={`w-5 h-5 text-${activity.status === 'success' ? 'green' : activity.status === 'warning' ? 'yellow' : activity.status === 'error' ? 'red' : 'blue'}-500`} />
                </div>

                {/* Conteúdo */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <TypeIcon className="w-4 h-4 text-slate-400" />
                        <span className="text-xs text-slate-400 uppercase tracking-wide font-medium">
                          {typeLabels[activity.type]}
                        </span>
                      </div>
                      <h4 className="text-white font-medium mb-1">
                        {activity.title}
                      </h4>
                      <p className="text-slate-300 text-sm">
                        {activity.description}
                      </p>
                      {activity.user && (
                        <p className="text-slate-400 text-xs mt-1">
                          Usuário: {activity.user}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs">
                        {formatTime(activity.timestamp)}
                      </p>
                      {activity.amount && (
                        <p className="text-white font-medium text-sm mt-1">
                          R$ {activity.amount.toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <Clock className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">
              Nenhuma atividade encontrada
            </h3>
            <p className="text-slate-400">
              Não há atividades para o filtro selecionado.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Activities;
