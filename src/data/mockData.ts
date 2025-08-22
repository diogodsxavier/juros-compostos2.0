import type { DashboardData } from '../types/dashboard';

export const mockDashboardData: DashboardData = {
  metrics: {
    totalRevenue: {
      value: 99560,
      change: 8.2,
      trend: 'up',
      label: 'Receita Total',
      description: 'Este mês vs último'
    },
    totalOrders: {
      value: 35,
      change: -2.4,
      trend: 'down',
      label: 'Total de Pedidos',
      description: 'Este mês vs último'
    },
    totalRefund: {
      value: 45600,
      change: -12.7,
      trend: 'down',
      label: 'Total de Reembolsos',
      description: 'Este mês vs último'
    },
    netProfit: {
      value: 60450,
      change: 15.3,
      trend: 'up',
      label: 'Lucro Líquido',
      description: 'Este mês vs último'
    }
  },
  revenueData: [
    { month: 'Jan', value: 4000 },
    { month: 'Feb', value: 3000 },
    { month: 'Mar', value: 5000 },
    { month: 'Apr', value: 4500 },
    { month: 'May', value: 6000 },
    { month: 'Jun', value: 5500 },
    { month: 'Jul', value: 7000 },
    { month: 'Aug', value: 8000 },
    { month: 'Sep', value: 7500 },
    { month: 'Oct', value: 9000 },
    { month: 'Nov', value: 8500 },
    { month: 'Dec', value: 10000 }
  ],
  categoryData: [
    { name: 'Apple MacBook Air M2', value: 35, percentage: 35, color: '#3b82f6' },
    { name: 'Samsung Galaxy S23', value: 24, percentage: 24, color: '#f59e0b' },
    { name: 'Asus/Acer HP Laptop 4+', value: 18, percentage: 18, color: '#10b981' },
    { name: 'Microsoft Surface Pro 8', value: 13, percentage: 13, color: '#8b5cf6' },
    { name: 'Apple AirPods Pro 2', value: 10, percentage: 10, color: '#ef4444' }
  ],
  orderStats: {
    totalOrders: 98,
    awaitingConfirmation: 12,
    totalCustomers: 17,
    waitingResponse: 17
  },
  orderStatuses: [
    { label: 'New orders', count: 12, change: 2.6, color: '#3b82f6' },
    { label: 'Await accepting orders', count: 20, change: 2.0, color: '#f59e0b' },
    { label: 'On way orders', count: 57, change: -0.6, color: '#eab308' },
    { label: 'Delivered orders', count: 98, change: 2.0, color: '#10b981' }
  ]
};
