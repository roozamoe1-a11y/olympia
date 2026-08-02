export async function getCryptoPrices() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,solana&order=market_cap_desc&per_page=4&page=1&sparkline=false",
      {
        next: {
          revalidate: 30,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch crypto prices");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getGoldPrices() {
  return [];
}

export async function getForexPrices() {
  return [];
}

export async function getOilPrices() {
  return [];
}

export async function getMarketNews() {
  return [];
}

export async function getEconomicCalendar() {
  return [];
}