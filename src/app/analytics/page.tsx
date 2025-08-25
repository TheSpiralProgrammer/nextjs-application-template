'use client';

import React, { useEffect, useState } from 'react';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
// import { useAuth } from '@/hooks/useAuth';
import NavBar from '@/components/NavBar';
import DrawTool from '@/components/DrawTool';

const AnalyticsPage = () => {
  // Temporarily disable auth functionality
  const user = { username: 'demo' };
  const loading = false;
  const [cryptoData, setCryptoData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
    } else {
      fetchCryptoData();
    }
  }, [loading, user]);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch('/api/crypto'); // Assuming API route exists
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      setCryptoData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    }
  };

  const chartConfig = {
    current_price: {
      label: "Price ($)",
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Crypto Analytics Dashboard</h1>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chart Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Price Chart</h2>
            {cryptoData.length > 0 ? (
              <ChartContainer config={chartConfig} className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={cryptoData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Line 
                      type="monotone" 
                      dataKey="current_price" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            ) : (
              <p className="text-center py-8">Loading chart data...</p>
            )}
          </div>

          {/* Drawing Tool Section */}
          <div>
            <DrawTool />
          </div>
        </div>

        {/* Crypto Data Table */}
        {cryptoData.length > 0 && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Cryptocurrency Data</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Symbol</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">24h Change</th>
                    <th className="px-4 py-2 text-left">Market Cap</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto: any) => (
                    <tr key={crypto.id} className="border-b">
                      <td className="px-4 py-2">{crypto.name}</td>
                      <td className="px-4 py-2 uppercase">{crypto.symbol}</td>
                      <td className="px-4 py-2">${crypto.current_price.toLocaleString()}</td>
                      <td className={`px-4 py-2 ${crypto.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td className="px-4 py-2">${crypto.market_cap.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPage;
