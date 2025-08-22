import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Clock, 
  Home, 
  Package, 
  Grid, 
  BarChart3, 
  Users, 
  Settings, 
  RefreshCw 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Clock, label: 'Atividades', path: '/activities', active: false },
    { icon: Home, label: 'Dashboard', path: '/', active: false },
    { icon: Package, label: 'Pedidos', path: '/orders', active: false },
    { icon: Grid, label: 'Produtos', path: '/products', active: false },
    { icon: BarChart3, label: 'Relatórios', path: '/reports', active: false },
    { icon: Users, label: 'Clientes', path: '/customers', active: false },
    { icon: Settings, label: 'Configurações', path: '/settings', active: false },
  ];

  const handleMenuClick = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="w-20 bg-slate-900 border-r border-slate-700 flex flex-col items-center py-6 space-y-8">
      {/* Logo */}
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-lg"></div>
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col items-center space-y-6 flex-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuClick(item.path)}
            className={`
              w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group
              ${isActive(item.path)
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }
            `}
            title={item.label}
          >
            <item.icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      {/* Logout */}
      <button className="w-12 h-12 rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
        <RefreshCw className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Sidebar;
