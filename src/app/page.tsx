import AdsCollection from "@/components/AdsCollection";
import Hero from "@/components/Hero";
import NewCollection from "@/components/NewCollection";
import NewProducts from "@/components/NewProducts";
import TrendingProducts from "@/components/TrendingProducts";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewProducts />
      <AdsCollection />
      <TrendingProducts />
      <NewCollection />
      <WhyChoose />
    </main>
  );
}
