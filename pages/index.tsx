import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Catalog from "../components/Catalog";
import Button from "../components/Button";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center pb-4 mt-12 mb-8 border-b border-gray-300">
          <span>16 of 32 products</span>
          <div className="h-10 mx-4 border-r border-gray-300"></div>
          <div className="flex items-center flex-grow">
            <span className="pr-3">Sort by:</span>
            <div className="space-x-3">
              <Button>Most Recent</Button>
              <Button>Lower Price</Button>
              <Button>Highest Price</Button>
            </div>
          </div>
          <img src="/arrow-left.svg" alt="" />
        </div>
        <div className="mt-6">
          <Catalog />
        </div>
      </div>
    </div>
  );
}
