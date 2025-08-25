import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Mock cryptocurrency data for demonstration
    // In a real application, you would fetch this from an external API like CoinGecko
    const mockData = [
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        current_price: 45000,
        price_change_percentage_24h: 2.5,
        market_cap: 850000000000,
        volume: 25000000000,
        date: '2024-01-01'
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        current_price: 3200,
        price_change_percentage_24h: -1.2,
        market_cap: 380000000000,
        volume: 15000000000,
        date: '2024-01-01'
      },
      {
        id: 'cardano',
        name: 'Cardano',
        symbol: 'ADA',
        current_price: 0.45,
        price_change_percentage_24h: 3.8,
        market_cap: 15000000000,
        volume: 800000000,
        date: '2024-01-01'
      }
    ];

    return NextResponse.json(mockData);
  } catch (error) {
    console.error('Error fetching crypto data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cryptocurrency data' },
      { status: 500 }
    );
  }
}
