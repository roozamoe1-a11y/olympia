import Header from "./components/layout/Header";
import HeroSlider from "./components/hero/HeroSlider";
import Categories from "./components/products/Categories";
import Features from "./components/home/Features";
import FeaturedProducts from "./components/products/FeaturedProducts";
import Brands from "./components/products/Brands";
import Footer from "./components/layout/Footer";
import VideoSlider from "./components/VideoSlider";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSlider />
      <VideoSlider />
      <Categories />
      <Features />
      <FeaturedProducts />
      <Brands />
      <Footer />
      
    </>
  );
}