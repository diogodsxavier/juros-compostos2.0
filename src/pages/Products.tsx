import React, { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { Search, Plus, MoreHorizontal, Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  rating: number;
  image: string;
  status: 'active' | 'inactive' | 'out-of-stock';
}

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Dados mock para produtos
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'MacBook Air M2',
      category: 'Laptops',
      price: 8999.99,
      stock: 15,
      rating: 4.8,
      image: '💻',
      status: 'active'
    },
    {
      id: '2',
      name: 'iPhone 15 Pro',
      category: 'Smartphones',
      price: 6999.99,
      stock: 8,
      rating: 4.9,
      image: '📱',
      status: 'active'
    },
    {
      id: '3',
      name: 'AirPods Pro',
      category: 'Acessórios',
      price: 2499.99,
      stock: 0,
      rating: 4.7,
      image: '🎧',
      status: 'out-of-stock'
    },
    {
      id: '4',
      name: 'iPad Air',
      category: 'Tablets',
      price: 5499.99,
      stock: 12,
      rating: 4.6,
      image: '📱',
      status: 'active'
    },
    {
      id: '5',
      name: 'Apple Watch Series 9',
      category: 'Smartwatches',
      price: 3999.99,
      stock: 6,
      rating: 4.8,
      image: '⌚',
      status: 'active'
    },
    {
      id: '6',
      name: 'Samsung Galaxy S24',
      category: 'Smartphones',
      price: 5999.99,
      stock: 10,
      rating: 4.7,
      image: '📱',
      status: 'active'
    }
  ];

  const statusColors = {
    active: 'bg-green-500',
    inactive: 'bg-gray-500',
    'out-of-stock': 'bg-red-500'
  };

  const statusLabels = {
    active: 'Ativo',
    inactive: 'Inativo',
    'out-of-stock': 'Sem Estoque'
  };

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddProduct = () => {
    console.log('Adicionando novo produto...');
  };

  const handleEditProduct = (productId: string) => {
    console.log('Editando produto:', productId);
  };

  const handleDeleteProduct = (productId: string) => {
    console.log('Deletando produto:', productId);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-4 h-4 ${
            i <= rating ? 'text-yellow-400 fill-current' : 'text-slate-400'
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <DashboardLayout>
      {/* Header da página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Produtos
        </h1>
        <p className="text-slate-400 text-lg">
          Gerencie o catálogo de produtos da sua loja
        </p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Total de Produtos</p>
              <p className="text-2xl font-bold text-white">{mockProducts.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-blue-500 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Produtos Ativos</p>
              <p className="text-2xl font-bold text-white">
                {mockProducts.filter(p => p.status === 'active').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-green-500 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Sem Estoque</p>
              <p className="text-2xl font-bold text-white">
                {mockProducts.filter(p => p.status === 'out-of-stock').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-red-500 rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm">Valor Total</p>
              <p className="text-2xl font-bold text-white">
                R$ {mockProducts.reduce((sum, p) => sum + p.price * p.stock, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-purple-500 rounded-lg"></div>
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
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filtros e ações */}
          <div className="flex items-center space-x-3">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Todas as Categorias</option>
              <option value="Laptops">Laptops</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Tablets">Tablets</option>
              <option value="Smartwatches">Smartwatches</option>
              <option value="Acessórios">Acessórios</option>
            </select>

            <button
              onClick={handleAddProduct}
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Adicionar Produto</span>
            </button>
          </div>
        </div>

        {/* Contador */}
        <div className="mt-4 text-sm text-slate-400">
          {filteredProducts.length} produtos encontrados
        </div>
      </div>

      {/* Grid de produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-200 hover:scale-105">
            {/* Imagem do produto */}
            <div className="h-48 bg-slate-700 flex items-center justify-center">
              <span className="text-6xl">{product.image}</span>
            </div>

            {/* Informações do produto */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-white truncate flex-1">
                  {product.name}
                </h3>
                <button className="text-slate-400 hover:text-white ml-2">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>

              <p className="text-slate-400 text-sm mb-2">{product.category}</p>

              {/* Avaliação */}
              <div className="flex items-center mb-3">
                <div className="flex items-center mr-2">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-slate-400">({product.rating})</span>
              </div>

              {/* Preço e estoque */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl font-bold text-white">
                  R$ {product.price.toFixed(2)}
                </span>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusColors[product.status]} text-white`}>
                  {statusLabels[product.status]}
                </span>
              </div>

              <div className="text-sm text-slate-400 mb-4">
                Estoque: {product.stock} unidades
              </div>

              {/* Ações */}
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditProduct(product.id)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-2 px-3 rounded-lg text-sm transition-colors"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 px-3 rounded-lg text-sm transition-colors"
                >
                  Excluir
                </button>
              </div>
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

export default Products;
