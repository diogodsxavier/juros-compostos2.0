import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Save, User, Store, Bell, Shield, Palette, CreditCard, Truck } from 'lucide-react';

const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    // Perfil
    name: 'Barbara Silva',
    email: 'barbara@loja.com',
    phone: '(11) 99999-9999',
    avatar: 'BS',
    
    // Loja
    storeName: 'TechStore Brasil',
    cnpj: '12.345.678/0001-90',
    address: 'Rua das Flores, 123 - São Paulo, SP',
    storePhone: '(11) 3333-4444',
    
    // Notificações
    emailNotifications: true,
    smsNotifications: false,
    orderUpdates: true,
    marketingEmails: false,
    
    // Segurança
    twoFactorAuth: false,
    sessionTimeout: 30,
    
    // Aparência
    theme: 'dark',
    language: 'pt-BR',
    currency: 'BRL'
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    console.log('Salvando configurações...', formData);
    // Aqui implementaria a lógica de salvamento
  };

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'store', label: 'Loja', icon: Store },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'appearance', label: 'Aparência', icon: Palette },
    { id: 'shipping', label: 'Frete', icon: Truck },
    { id: 'payment', label: 'Pagamento', icon: CreditCard }
  ];

  const renderProfileTab = () => (
    <div className="space-y-6">
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
          {formData.avatar}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Foto do Perfil</h3>
          <p className="text-slate-400 text-sm">JPG, PNG ou GIF. Máximo 2MB.</p>
          <button className="mt-2 bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg transition-colors">
            Alterar Foto
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Nome Completo</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">E-mail</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Telefone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );

  const renderStoreTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Nome da Loja</label>
          <input
            type="text"
            value={formData.storeName}
            onChange={(e) => handleInputChange('storeName', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">CNPJ</label>
          <input
            type="text"
            value={formData.cnpj}
            onChange={(e) => handleInputChange('cnpj', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-slate-300 mb-2">Endereço</label>
          <input
            type="text"
            value={formData.address}
            onChange={(e) => handleInputChange('address', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Telefone da Loja</label>
          <input
            type="tel"
            value={formData.storePhone}
            onChange={(e) => handleInputChange('storePhone', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="bg-slate-700 rounded-lg p-4">
        <h4 className="text-white font-medium mb-2">Informações de Horário</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-300 mb-1">Horário de Funcionamento</label>
            <select className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white">
              <option>Segunda a Sexta: 9h às 18h</option>
              <option>Segunda a Sexta: 8h às 17h</option>
              <option>Segunda a Sábado: 9h às 18h</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-300 mb-1">Fuso Horário</label>
            <select className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white">
              <option>UTC-3 (Brasília)</option>
              <option>UTC-4 (Manaus)</option>
              <option>UTC-5 (Rio Branco)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">Notificações por E-mail</h4>
            <p className="text-slate-400 text-sm">Receba atualizações importantes por e-mail</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.emailNotifications}
              onChange={(e) => handleInputChange('emailNotifications', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">Notificações por SMS</h4>
            <p className="text-slate-400 text-sm">Receba alertas importantes por SMS</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.smsNotifications}
              onChange={(e) => handleInputChange('smsNotifications', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">Atualizações de Pedidos</h4>
            <p className="text-slate-400 text-sm">Seja notificado sobre mudanças no status dos pedidos</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.orderUpdates}
              onChange={(e) => handleInputChange('orderUpdates', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">E-mails de Marketing</h4>
            <p className="text-slate-400 text-sm">Receba ofertas e novidades da loja</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.marketingEmails}
              onChange={(e) => handleInputChange('marketingEmails', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">Autenticação de Dois Fatores</h4>
            <p className="text-slate-400 text-sm">Adicione uma camada extra de segurança à sua conta</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={formData.twoFactorAuth}
              onChange={(e) => handleInputChange('twoFactorAuth', e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="p-4 bg-slate-700 rounded-lg">
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Tempo de Sessão (minutos)
          </label>
          <select
            value={formData.sessionTimeout}
            onChange={(e) => handleInputChange('sessionTimeout', parseInt(e.target.value))}
            className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white"
          >
            <option value={15}>15 minutos</option>
            <option value={30}>30 minutos</option>
            <option value={60}>1 hora</option>
            <option value={120}>2 horas</option>
          </select>
        </div>

        <div className="p-4 bg-slate-700 rounded-lg">
          <h4 className="text-white font-medium mb-3">Alterar Senha</h4>
          <div className="space-y-3">
            <input
              type="password"
              placeholder="Senha atual"
              className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white placeholder-slate-400"
            />
            <input
              type="password"
              placeholder="Nova senha"
              className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white placeholder-slate-400"
            />
            <input
              type="password"
              placeholder="Confirmar nova senha"
              className="w-full bg-slate-600 border border-slate-500 rounded px-3 py-2 text-white placeholder-slate-400"
            />
          </div>
          <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Alterar Senha
          </button>
        </div>
      </div>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Tema</label>
          <select
            value={formData.theme}
            onChange={(e) => handleInputChange('theme', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="dark">Escuro</option>
            <option value="light">Claro</option>
            <option value="auto">Automático</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Idioma</label>
          <select
            value={formData.language}
            onChange={(e) => handleInputChange('language', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="pt-BR">Português (Brasil)</option>
            <option value="en-US">English (US)</option>
            <option value="es-ES">Español</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Moeda</label>
          <select
            value={formData.currency}
            onChange={(e) => handleInputChange('currency', e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="BRL">Real (R$)</option>
            <option value="USD">Dólar ($)</option>
            <option value="EUR">Euro (€)</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderShippingTab = () => (
    <div className="space-y-6">
      <div className="bg-slate-700 rounded-lg p-4">
        <h4 className="text-white font-medium mb-3">Configurações de Frete</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="freeShipping" className="rounded border-slate-600 bg-slate-700 text-blue-600" />
            <label htmlFor="freeShipping" className="text-slate-300">Frete grátis para pedidos acima de R$ 100</label>
          </div>
          <div className="flex items-center space-x-3">
            <input type="checkbox" id="expressShipping" className="rounded border-slate-600 bg-slate-700 text-blue-600" />
            <label htmlFor="expressShipping" className="text-slate-300">Oferecer frete expresso</label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Frete Padrão (R$)</label>
          <input
            type="number"
            placeholder="15.90"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Frete Expresso (R$)</label>
          <input
            type="number"
            placeholder="29.90"
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );

  const renderPaymentTab = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">PayPal</h4>
            <p className="text-slate-400 text-sm">Aceitar pagamentos via PayPal</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">Cartão de Crédito</h4>
            <p className="text-slate-400 text-sm">Aceitar pagamentos com cartão</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">PIX</h4>
            <p className="text-slate-400 text-sm">Aceitar pagamentos via PIX</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-700 rounded-lg">
          <div>
            <h4 className="text-white font-medium">Boleto Bancário</h4>
            <p className="text-slate-400 text-sm">Aceitar pagamentos via boleto</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile': return renderProfileTab();
      case 'store': return renderStoreTab();
      case 'notifications': return renderNotificationsTab();
      case 'security': return renderSecurityTab();
      case 'appearance': return renderAppearanceTab();
      case 'shipping': return renderShippingTab();
      case 'payment': return renderPaymentTab();
      default: return renderProfileTab();
    }
  };

  return (
    <DashboardLayout>
      {/* Header da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Configurações
        </h1>
        <p className="text-slate-400 text-lg">
          Gerencie as configurações da sua conta e loja
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar de navegação */}
        <div className="lg:w-64">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="flex-1">
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">
                {tabs.find(tab => tab.id === activeTab)?.label}
              </h2>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Salvar</span>
              </button>
            </div>

            {renderTabContent()}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
