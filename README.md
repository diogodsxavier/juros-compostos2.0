# 🚀 Dashboard Moderno - TechStore Brasil

Um dashboard completo de e-commerce desenvolvido em React com TypeScript, featuring um design moderno em tema dark e interface totalmente em português brasileiro.

## 📱 Demo & Preview

![Dashboard Preview](https://img.shields.io/badge/Status-✅_Funcional-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19.1.0-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.17-38bdf8)

**🌐 Acesse:** `http://localhost:5174/` (após rodar `npm run dev`)

---

## 🎯 Visão Geral do Projeto

Este é um **sistema completo de dashboard** para e-commerce com 7 páginas funcionais, desenvolvido baseado em especificações de design moderno. O projeto simula uma loja de tecnologia real com dados mock brasileiros e interface completamente traduzida.

### ✨ Principais Características

- **🎨 Design Moderno:** Interface dark com gradientes e animações suaves
- **📱 Totalmente Responsivo:** Mobile-first design com breakpoints otimizados
- **🇧🇷 100% Português:** Interface, dados e moeda brasileira (R$)
- **📊 Gráficos Interativos:** Charts responsivos com Recharts
- **🔄 Navegação SPA:** React Router com navegação instantânea
- **💾 Dados Realistas:** Mock data com produtos e clientes brasileiros

---

## 🏗️ Arquitetura do Projeto

### 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Card.tsx            # Card base para layouts
│   ├── CategoryChart.tsx   # Gráfico de pizza (vendas por categoria)
│   ├── DashboardLayout.tsx # Layout principal com sidebar
│   ├── Header.tsx          # Cabeçalho com busca e controles
│   ├── MetricCard.tsx      # Cards de métricas com tendências
│   ├── RevenueChart.tsx    # Gráfico de barras (receita mensal)
│   ├── Sidebar.tsx         # Navegação lateral
│   └── StatCard.tsx        # Cards de estatísticas simples
├── pages/               # Páginas da aplicação
│   ├── Activities.tsx      # Feed de atividades em tempo real
│   ├── Customers.tsx       # Gestão de clientes
│   ├── Dashboard.tsx       # Dashboard principal
│   ├── OrderList.tsx       # Lista de pedidos
│   ├── Products.tsx        # Catálogo de produtos
│   ├── Reports.tsx         # Relatórios e análises
│   └── Settings.tsx        # Configurações (7 abas)
├── types/               # Definições TypeScript
│   └── dashboard.ts        # Interfaces e tipos
├── data/                # Dados mock
│   └── mockData.ts         # Dados simulados brasileiros
└── App.tsx              # Roteamento principal
```

---

## 📄 Páginas Implementadas

### 🏠 1. Dashboard Principal (`/`)
**Status:** ✅ **100% Completo**

**Funcionalidades:**
- 📊 **4 Cards de Métricas:** Receita Total, Pedidos, Reembolsos, Lucro Líquido
- 📈 **Gráfico de Receita:** Chart de barras com dados de 12 meses
- 🍕 **Gráfico de Categorias:** Pizza chart com vendas por categoria
- 📱 **Cards de Estatísticas:** Total de pedidos e clientes
- 🚀 **Ações Rápidas:** Botões para navegação rápida

**Layout Responsivo:**
- **Mobile:** 1 coluna para todos elementos
- **Tablet:** 2 colunas para métricas
- **Desktop:** 4 colunas para métricas, 2+1 para gráficos

---

### ⚡ 2. Atividades (`/activities`)
**Status:** ✅ **100% Completo**

**Funcionalidades:**
- 📋 **Feed de Atividades:** Timeline com atividades em tempo real
- 🔍 **Filtros por Tipo:** Pedidos, Pagamentos, Usuários, Sistema
- 📊 **Cards de Estatísticas:** Contadores por tipo de atividade
- ⏰ **Timestamps Relativos:** "5 min atrás", "2h atrás"
- 🎨 **Status Coloridos:** Sucesso, Aviso, Erro, Info

**Tipos de Atividades:**
- 🛒 **Pedidos:** Novos, cancelados, entregues
- 💳 **Pagamentos:** Confirmações, reembolsos
- 👤 **Usuários:** Novos cadastros, ativações
- ⚙️ **Sistema:** Alertas, backups, manutenções

---

### 📦 3. Lista de Pedidos (`/orders`)
**Status:** ✅ **100% Completo**

**Funcionalidades:**
- 📊 **Cards de Status:** Novos, Aguardando, A Caminho, Entregues
- 🔍 **Busca Avançada:** Por número do pedido ou nome do cliente
- 🏷️ **Filtros por Status:** Dropdown com todos os status
- 📋 **Tabela Completa:** Com todas as colunas especificadas
- 📤 **Exportação:** Botão para exportar dados
- ➕ **Adicionar Pedido:** Funcionalidade para novos pedidos
- 📱 **Paginação:** Controles de navegação

**Colunas da Tabela:**
- ☑️ Checkbox para seleção
- 🔢 Número do Pedido
- 👤 Cliente
- 📂 Categoria
- 💰 Preço (em R$)
- 📅 Data
- 💳 Forma de Pagamento
- 🏷️ Status (com badges coloridos)
- ⚙️ Ações (menu dropdown)

---

### 🛍️ 4. Produtos (`/products`)
**Status:** ✅ **100% Completo**

**Funcionalidades:**
- 📊 **Cards de Estatísticas:** Total, Ativos, Sem Estoque, Valor Total
- 🔍 **Busca de Produtos:** Por nome ou categoria
- 🏷️ **Filtros por Categoria:** Laptops, Smartphones, Tablets, etc.
- 🎯 **Grid Responsivo:** 1-4 colunas conforme tela
- ⭐ **Sistema de Avaliações:** 5 estrelas com ratings
- 📊 **Status Visual:** Badges coloridos (Ativo, Inativo, Sem Estoque)
- ➕ **Adicionar Produto:** Botão para novos produtos

**Informações dos Produtos:**
- 🖼️ Imagem (emojis como placeholder)
- 📝 Nome e Categoria
- ⭐ Avaliação com estrelas
- 💰 Preço em R$
- 📦 Quantidade em Estoque
- 🏷️ Status atual
- ⚙️ Ações (Editar/Excluir)

---

### 👥 5. Clientes (`/customers`)
**Status:** ✅ **100% Completo**

**Funcionalidades:**
- 📊 **Cards de Estatísticas:** Total, Ativos, VIP, Valor Total
- 🔍 **Busca Inteligente:** Nome, email ou cidade
- 🏷️ **Filtros por Status:** Ativos, Inativos, VIP
- 📱 **Cards de Cliente:** Layout responsivo em grid
- 📧 **Informações de Contato:** Email, telefone, endereço
- 📊 **Estatísticas do Cliente:** Pedidos, valor gasto, último pedido
- ⚙️ **Ações:** Contatar, Editar, Excluir

**Dados dos Clientes:**
- 👤 Avatar com iniciais
- 📧 Email de contato
- 📞 Telefone
- 📍 Cidade e Estado
- 🛒 Total de Pedidos
- 💰 Valor Total Gasto
- 📅 Data do Último Pedido
- 🏷️ Status (Ativo, Inativo, VIP)

---

### 📈 6. Relatórios (`/reports`)
**Status:** ✅ **100% Completo**

**Funcionalidades:**
- 📊 **Métricas Principais:** Receita, Pedidos, Clientes, Ticket Médio
- 📅 **Seletor de Período:** Semana, Mês, Trimestre, Ano
- 📈 **Gráfico de Evolução:** Area chart com vendas mensais
- 🍕 **Vendas por Categoria:** Pie chart com percentuais
- 📊 **Comparativo:** Line chart Pedidos vs Clientes
- 🏆 **Top 5 Produtos:** Ranking com vendas e receita
- 📤 **Exportação:** Relatórios em diferentes formatos
- 📋 **Resumo Executivo:** Pontos positivos e áreas de atenção

**Análises Disponíveis:**
- 💹 Crescimento de receita
- 📊 Performance por categoria
- 👥 Evolução da base de clientes
- 🛒 Análise de pedidos
- 💰 Ticket médio
- 🎯 Produtos mais vendidos

---

### ⚙️ 7. Configurações (`/settings`)
**Status:** ✅ **100% Completo**

**7 Abas de Configuração:**

#### 👤 **Perfil**
- 🖼️ Upload de foto do perfil
- 📝 Nome completo
- 📧 Email
- 📞 Telefone

#### 🏪 **Loja**
- 🏢 Nome da loja
- 📄 CNPJ
- 📍 Endereço completo
- 📞 Telefone da loja
- ⏰ Horário de funcionamento
- 🌍 Fuso horário

#### 🔔 **Notificações**
- 📧 Notificações por email
- 📱 Notificações por SMS
- 🛒 Atualizações de pedidos
- 📢 Emails de marketing

#### 🔒 **Segurança**
- 🔐 Autenticação de dois fatores
- ⏱️ Tempo de sessão
- 🔑 Alteração de senha

#### 🎨 **Aparência**
- 🌙 Tema (Escuro/Claro/Auto)
- 🌍 Idioma
- 💰 Moeda

#### 🚚 **Frete**
- 🆓 Configurações de frete grátis
- 📦 Frete padrão e expresso
- ⚡ Opções de entrega

#### 💳 **Pagamento**
- 💰 PayPal
- 💳 Cartão de crédito
- 🏧 PIX
- 📄 Boleto bancário

---

## 🛠️ Tecnologias Utilizadas

### 📦 Dependências Principais

```json
{
  "react": "^19.1.0",              // Framework principal
  "react-dom": "^19.1.0",         // DOM renderer
  "react-router-dom": "^7.8.1",   // Roteamento SPA
  "recharts": "^3.1.2",           // Gráficos interativos
  "lucide-react": "^0.541.0",     // Ícones modernos
  "typescript": "~5.8.3"          // Tipagem estática
}
```

### 🎨 Styling & Build

```json
{
  "tailwindcss": "^3.4.17",       // Framework CSS
  "autoprefixer": "^10.4.21",     // CSS vendor prefixes
  "postcss": "^8.5.6",            // CSS processor
  "vite": "^6.3.5"                // Build tool
}
```

### 🔧 Ferramentas de Desenvolvimento

```json
{
  "@vitejs/plugin-react": "^4.4.1",  // Plugin React para Vite
  "eslint": "^9.25.0",               // Linter
  "typescript-eslint": "^8.30.1"     // ESLint + TypeScript
}
```

---

## 🎨 Design System

### 🎨 Paleta de Cores

```css
/* Backgrounds */
--primary-bg: #0f172a     /* Slate 900 */
--card-bg: #1e293b        /* Slate 800 */
--secondary-bg: #334155   /* Slate 700 */

/* Text Colors */
--text-primary: #f8fafc   /* White */
--text-secondary: #94a3b8 /* Slate 400 */
--text-muted: #64748b     /* Slate 500 */

/* Accent Colors */
--accent-blue: #3b82f6    /* Blue 500 */
--success: #10b981        /* Emerald 500 */
--danger: #ef4444         /* Red 500 */
--warning: #f59e0b        /* Amber 500 */
```

### 📝 Typography Scale

```css
/* Headers */
.text-3xl  /* 30px - Page titles */
.text-2xl  /* 24px - Section headers */
.text-xl   /* 20px - Card titles */
.text-lg   /* 18px - Subtitles */

/* Body Text */
.text-base /* 16px - Regular text */
.text-sm   /* 14px - Small text */
.text-xs   /* 12px - Labels */
```

### 📐 Spacing System

```css
/* Padding */
.p-6  /* 24px - Main cards */
.p-4  /* 16px - Secondary cards */
.p-3  /* 12px - Small cards */

/* Gaps */
.gap-6 /* 24px - Section gaps */
.gap-4 /* 16px - Card gaps */
.gap-3 /* 12px - Element gaps */

/* Border Radius */
.rounded-xl /* 12px - Main containers */
.rounded-lg /* 8px - Cards */
```

---

## 🚀 Como Executar

### 📋 Pré-requisitos

- **Node.js** 18+ 
- **npm** ou **yarn**

### ⚡ Instalação e Execução

```bash
# 1. Clone o repositório
git clone [url-do-repositorio]
cd juros-compostos2.0

# 2. Instale as dependências
npm install

# 3. Execute em modo desenvolvimento
npm run dev

# 4. Acesse no navegador
# http://localhost:5174/
```

### 🏗️ Build para Produção

```bash
# Build otimizado
npm run build

# Preview do build
npm run preview

# Linting
npm run lint
```

---

## 📊 Dados Mock

### 🏪 Dados da Loja
- **📈 Métricas:** Receita, pedidos, reembolsos, lucro
- **📊 Receita:** 12 meses de dados históricos
- **🛍️ Categorias:** Laptops, Smartphones, Tablets, etc.

### 👥 Clientes Brasileiros
- **6 clientes fictícios** com dados realistas
- **📍 Cidades:** São Paulo, Rio de Janeiro, Belo Horizonte, etc.
- **📧 Emails** e **📞 telefones** brasileiros
- **💰 Valores** em Real (R$)

### 🛒 Produtos de Tecnologia
- **MacBook Air M2, iPhone 15 Pro, iPad Air**
- **Samsung Galaxy S24, Apple Watch Series 9**
- **📊 Avaliações, estoque, preços**

### 📦 Pedidos e Transações
- **Dados de exemplo** com status brasileiros
- **💳 Formas de pagamento:** PIX, Cartão, Boleto, PayPal
- **📅 Datas** e **⏰ timestamps** realistas

---

## 🎯 Funcionalidades Implementadas

### ✅ **Totalmente Funcionais**

- ✅ **Navegação SPA** com React Router
- ✅ **Sidebar responsiva** com indicadores ativos
- ✅ **Gráficos interativos** com Recharts
- ✅ **Busca e filtros** em todas as páginas
- ✅ **Layout responsivo** para todos dispositivos
- ✅ **Tema dark** consistente
- ✅ **Animações CSS** suaves
- ✅ **TypeScript** 100% tipado
- ✅ **Dados mock** realistas
- ✅ **Interface em português** brasileiro

### 🔄 **Interativas mas Simuladas**

- 🔄 **Botões de ação** (adicionar, editar, excluir) - _Console logs_
- 🔄 **Formulários** de configurações - _State local_
- 🔄 **Exportação** de dados - _Console logs_
- 🔄 **Upload** de arquivos - _Placeholder_

---

## 🚧 Próximos Passos

### 🎯 **Melhorias Sugeridas**

#### 🔗 **Backend Integration**
- [ ] **API REST** para dados reais
- [ ] **Autenticação** JWT
- [ ] **CRUD completo** para todas entidades
- [ ] **Upload de arquivos** real

#### 📊 **Funcionalidades Avançadas**
- [ ] **Filtros avançados** com múltiplos critérios
- [ ] **Exportação real** (PDF, Excel, CSV)
- [ ] **Dashboard personalizável** (drag & drop)
- [ ] **Notificações push** em tempo real

#### 🎨 **UX/UI Enhancements**
- [ ] **Tema claro** opcional
- [ ] **Modo offline** com PWA
- [ ] **Loading states** e skeletons
- [ ] **Infinite scroll** nas listagens

#### 📱 **Mobile Experience**
- [ ] **Gestos touch** otimizados
- [ ] **Menu mobile** melhorado
- [ ] **Charts móveis** otimizados

#### ⚡ **Performance**
- [ ] **Lazy loading** de componentes
- [ ] **Virtual scrolling** para listas grandes
- [ ] **Code splitting** otimizado
- [ ] **PWA** com service workers

#### 🧪 **Qualidade**
- [ ] **Testes unitários** (Jest + Testing Library)
- [ ] **Testes E2E** (Cypress/Playwright)
- [ ] **Storybook** para componentes
- [ ] **CI/CD pipeline**

---

## 🤝 Contribuição

### 🔧 **Como Contribuir**

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. **Commit** suas mudanças (`git commit -m 'Add: nova feature'`)
4. **Push** para a branch (`git push origin feature/nova-feature`)
5. **Abra** um Pull Request

### 📋 **Padrões de Código**

- **✅ TypeScript** obrigatório
- **✅ ESLint** configurado
- **✅ Componentes funcionais** apenas
- **✅ Tailwind CSS** para estilos
- **✅ Commits semânticos** (feat, fix, docs, etc.)

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---

## 👤 Autor

**Desenvolvido por:** Diogo Xavier  
**Projeto:** Dashboard Moderno - TechStore Brasil  
**Versão:** 1.0.0  
**Data:** Agosto 2024  

---

## 🙏 Agradecimentos

- **React Team** pelo framework incrível
- **Tailwind Labs** pelo CSS framework
- **Recharts** pelos gráficos responsivos
- **Lucide** pelos ícones modernos
- **Vite** pelo build tool super rápido

---

<div align="center">

**⭐ Se você gostou do projeto, deixe uma estrela! ⭐**

</div>
