"use client";

import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardCards from "./components/DashboardCards";

import UserProfileCard from "./components/UserProfileCard";

import OrdersCard, {
  Order,
} from "./components/OrdersCard";

import CartSummaryCard from "./components/CartSummaryCard";

import FavoriteProducts, {
  FavoriteProduct,
} from "./components/FavoriteProducts";

import RecentProducts, {
  RecentProduct,
} from "./components/RecentProducts";


import Notifications from "./components/Notifications";

import QuickActions from "./components/QuickActions";


// داشبورد هوشمند
import AiRecommendation from "./components/ AiRecommendation";

import AiAssistantCard from "./components/AiAssistantCard";

import AiQuestions from "./components/AiQuestions";


// اخبار
import LatestNews from "./components/LatestNews";

import MarketNews from "./components/MarketNews";

import BodybuildingNews from "./components/ BodybuildingNews";

import SupplementNews from "./components/SupplementNews";


// بازار
import FinancialMarkets from "./components/ FinancialMarkets";

import MarketCard from "./components/MarketCard";

import CurrencyPrices from "./components/CurrencyPrices";

import GoldPrices from "./components/GoldPrices";

import OilPrices from "./components/OilPrices";

import CryptoPrices from "./components/CryptoPrices";

import EconomicCalendar from "./components/EconomicCalendar";




export default function DashboardPage() {


  const orders: Order[] = [];


  const favoriteProducts: FavoriteProduct[] = [];


  const recentProducts: RecentProduct[] = [];


  



  return (

    <main
      className="
      min-h-screen
      bg-[#050505]
      text-white
      "
    >


      <DashboardHeader />



      <div
        className="
        max-w-7xl
        mx-auto
        px-4
        py-8
        "
      >


        <div
          className="
          grid
          lg:grid-cols-12
          gap-6
          "
        >



          <div
            className="
            lg:col-span-3
            "
          >

            <DashboardSidebar />

          </div>





          <div
            className="
            lg:col-span-9
            space-y-6
            "
          >



            <DashboardCards

              cartCount={0}

              orderCount={0}

              favoriteCount={0}

              unreadNews={0}

            />





            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >


              <UserProfileCard

                name="کاربر المپیا"

                email=""

                phone=""

                orders={0}

                points={0}

              />



              <CartSummaryCard />


            </div>







            {/* هوش مصنوعی */}


            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >

              <AiRecommendation />


              <AiAssistantCard />


            </div>



            <AiQuestions />









            {/* بازارهای مالی */}



            <FinancialMarkets />


            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >

              <MarketCard />

              <CurrencyPrices />

            </div>





            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >


              <GoldPrices />


              <OilPrices />


            </div>





            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >


              <CryptoPrices />


              <EconomicCalendar />


            </div>









            {/* اخبار */}<div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >


              <LatestNews />


              <MarketNews />


            </div>





            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >


              <BodybuildingNews />


              <SupplementNews />


            </div>









            {/* سفارشات */}



            <OrdersCard
              orders={orders}
            />







            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >


              <FavoriteProducts

                products={favoriteProducts}

              />



              <RecentProducts

                products={recentProducts}

              />


            </div>







            <div
              className="
              grid
              md:grid-cols-2
              gap-6
              "
            >


              <Notifications />

                
              



              <QuickActions />


            </div>





          </div>



        </div>



      </div>



    </main>

  );

}