import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, BarChart3 } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const DashboardHome: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      title: 'Portfolio Value',
      value: '$124,520.00',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign
    },
    {
      title: "Today's P&L",
      value: '+$2,340.00',
      change: '+1.9%',
      isPositive: true,
      icon: TrendingUp
    },
    {
      title: 'Total Trades',
      value: '1,247',
      change: '+23',
      isPositive: true,
      icon: BarChart3
    },
    {
      title: 'Win Rate',
      value: '68.5%',
      change: '+2.1%',
      isPositive: true,
      icon: TrendingUp
    }
  ];

  const watchlist = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 175.43, change: 2.34, changePercent: 1.35 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2834.50, change: -15.20, changePercent: -0.53 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 338.45, change: 5.67, changePercent: 1.70 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.67, change: -8.90, changePercent: -3.49 },
    { symbol: 'NVDA', name: 'NVIDIA Corp.', price: 456.78, change: 12.34, changePercent: 2.78 }
  ];

  const recentTrades = [
    { symbol: 'AAPL', type: 'BUY', quantity: 100, price: 173.09, time: '2 hours ago' },
    { symbol: 'GOOGL', type: 'SELL', quantity: 50, price: 2849.70, time: '4 hours ago' },
    { symbol: 'MSFT', type: 'BUY', quantity: 75, price: 332.78, time: '1 day ago' },
    { symbol: 'TSLA', type: 'SELL', quantity: 200, price: 254.57, time: '2 days ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, Trader!
        </h1>
        <p className="text-gray-600">
          Here's what's happening with your portfolio today.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-full ${stat.isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
                  <Icon className={`h-6 w-6 ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                {stat.isPositive ? (
                  <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                ) : (
                  <TrendingDown className="h-4 w-4 text-red-600 mr-1" />
                )}
                <span className={`text-sm font-medium ${stat.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </span>
                <span className="text-sm text-gray-500 ml-2">from yesterday</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Charts and Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Watchlist */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">{t('watchlist')}</h2>
          <div className="space-y-3">
            {watchlist.map((stock, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-semibold text-sm">{stock.symbol.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{stock.symbol}</p>
                    <p className="text-sm text-gray-600">{stock.name}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${stock.price}</p>
                  <p className={`text-sm ${stock.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {stock.change >= 0 ? '+' : ''}{stock.change} ({stock.changePercent}%)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Trades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Trades</h2>
          <div className="space-y-3">
            {recentTrades.map((trade, index) => (
              <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    trade.type === 'BUY' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    <span className="text-xs font-bold">{trade.type === 'BUY' ? 'B' : 'S'}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{trade.symbol}</p>
                    <p className="text-sm text-gray-600">{trade.quantity} shares</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">${trade.price}</p>
                  <p className="text-sm text-gray-600">{trade.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardHome;