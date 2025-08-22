export interface Metric {
  value: number;
  change: number;
  trend: 'up' | 'down';
  label: string;
  description: string;
}

export interface RevenueData {
  month: string;
  value: number;
}

export interface CategoryData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

export interface Order {
  id: string;
  customer: string;
  category: string;
  price: number;
  date: string;
  payment: string;
  status: 'new' | 'awaiting' | 'on-way' | 'delivered';
}

export interface OrderStatus {
  label: string;
  count: number;
  change: number;
  color: string;
}

export interface DashboardData {
  metrics: {
    totalRevenue: Metric;
    totalOrders: Metric;
    totalRefund: Metric;
    netProfit: Metric;
  };
  revenueData: RevenueData[];
  categoryData: CategoryData[];
  orderStats: {
    totalOrders: number;
    awaitingConfirmation: number;
    totalCustomers: number;
    waitingResponse: number;
  };
  orderStatuses: OrderStatus[];
}
