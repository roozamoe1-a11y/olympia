import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import MarketHeader from "./components/MarketHeader";
import CryptoSection from "./components/CryptoSection";
import GoldSection from "./components/GoldSection";
import ForexSection from "./components/ForexSection";
import OilSection from "./components/OilSection";
import MarketNews from "./components/MarketNews";
import LiveTicker from "./components/LiveTicker";
import CalendarSection from "./components/CalendarSection";

export default function MarketPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#0b0b0b] text-white">

        <MarketHeader />
        <LiveTicker />

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 space-y-20">

          <CryptoSection />

          <GoldSection />

          <ForexSection />

          <OilSection />

          <div className="grid lg:grid-cols-2 gap-8">

            <MarketNews />

            <CalendarSection />

          </div>

        </div>

      </main>

      <Footer />
    </>
  );
}