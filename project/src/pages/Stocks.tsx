
import React, { useEffect, useState } from 'react';
import { TrendingUp, TrendingDown, BarChart3, Activity, DollarSign, Calendar } from 'lucide-react';

interface StockData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  volume: number;
  marketCap: string;
  lastUpdate: string;
}

const Stocks: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedExchange, setSelectedExchange] = useState<'DSE' | 'CSE'>('DSE');

  // Mock stock data for demonstration (replace with real API)
  const mockStockData: StockData[] = [
    {
      symbol: 'TEXTILE1',
      name: 'Bangladesh Textile Corp',
      price: 245.50,
      change: 12.30,
      changePercent: 5.27,
      volume: 125000,
      marketCap: '2.5B',
      lastUpdate: new Date().toLocaleTimeString()
    },
    {
      symbol: 'GARMENT2',
      name: 'Premium Garments Ltd',
      price: 189.75,
      change: -8.25,
      changePercent: -4.17,
      volume: 98000,
      marketCap: '1.8B',
      lastUpdate: new Date().toLocaleTimeString()
    },
    {
      symbol: 'FABRIC3',
      name: 'Modern Fabrics Co',
      price: 156.20,
      change: 3.45,
      changePercent: 2.26,
      volume: 67000,
      marketCap: '980M',
      lastUpdate: new Date().toLocaleTimeString()
    },
    {
      symbol: 'COTTON4',
      name: 'Cotton Mills Inc',
      price: 298.80,
      change: 15.60,
      changePercent: 5.51,
      volume: 143000,
      marketCap: '3.2B',
      lastUpdate: new Date().toLocaleTimeString()
    }
  ];

  useEffect(() => {
    const fetchStockData = async () => {
      setLoading(true);
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real implementation, you would fetch from DSE/CSE APIs
        // const response = await fetch(`/api/stocks/${selectedExchange.toLowerCase()}`);
        // const data = await response.json();
        
        setStocks(mockStockData);
      } catch (error) {
        console.error('Failed to fetch stock data:', error);
        setStocks(mockStockData); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchStockData();
  }, [selectedExchange]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    } else if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <BarChart3 className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Stock Market Data
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Real-time stock prices from Dhaka Stock Exchange (DSE) and Chittagong Stock Exchange (CSE)
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Exchange Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-lg p-2 shadow-lg">
              <button
                onClick={() => setSelectedExchange('DSE')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedExchange === 'DSE'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Dhaka Stock Exchange (DSE)
              </button>
              <button
                onClick={() => setSelectedExchange('CSE')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  selectedExchange === 'CSE'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Chittagong Stock Exchange (CSE)
              </button>
            </div>
          </div>

          {/* Market Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-green-500" />
                <span className="text-sm font-medium text-gray-500">MARKET STATUS</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Open</h3>
              <p className="text-gray-600">Trading hours: 10:30 AM - 2:30 PM</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <TrendingUp className="w-8 h-8 text-blue-500" />
                <span className="text-sm font-medium text-gray-500">INDEX</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">6,428.50</h3>
              <p className="text-green-500 font-semibold">+1.25% (+79.80)</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-purple-500" />
                <span className="text-sm font-medium text-gray-500">VOLUME</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">12.5M</h3>
              <p className="text-gray-600">Shares traded today</p>
            </div>
          </div>

          {/* Stock Table */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  Textile Sector Stocks - {selectedExchange}
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  Last updated: {new Date().toLocaleString()}
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              {loading ? (
                <div className="p-16 text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading stock data...</p>
                </div>
              ) : (
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Symbol
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Company
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Change
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Volume
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Market Cap
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {stocks.map((stock) => (
                      <tr key={stock.symbol} className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-bold text-gray-900">{stock.symbol}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-gray-900">{stock.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className="font-bold text-gray-900">
                            {formatCurrency(stock.price)}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <div className={`flex items-center justify-end ${
                            stock.change >= 0 ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {stock.change >= 0 ? (
                              <TrendingUp className="w-4 h-4 mr-1" />
                            ) : (
                              <TrendingDown className="w-4 h-4 mr-1" />
                            )}
                            <span className="font-semibold">
                              {stock.change >= 0 ? '+' : ''}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-gray-900">
                          {formatVolume(stock.volume)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-gray-900 font-semibold">
                          {stock.marketCap}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Activity className="w-5 h-5 text-yellow-600" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Investment Disclaimer
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    This information is for educational purposes only and should not be considered as financial advice. 
                    Stock prices are delayed and may not reflect real-time market conditions. 
                    Please consult with a qualified financial advisor before making investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stocks;
