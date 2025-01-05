import FlipFlopSection from "@/components/flip-flop-section";
import NewsPage from "@/components/news-grid";
import NewsCarousel from "@/components/newscarousel";
import {
  getAllFlipNews,
  getAllNews,
  getPaginatedFlipNews,
  getPaginatedNews,
} from "@/lib/newsquery";
import { Newspaper } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const { data: news } = await getPaginatedNews(1, 6);
  const { data: flipnews } = await getPaginatedFlipNews(1, 3);
  const { data: politicsNews } = await getPaginatedNews(1, 3, "politics");
  const { data: sportsNews } = await getPaginatedNews(1, 3, "sports");
  const { data: worldNews } = await getPaginatedNews(1, 3, "world");
  const { data: businessNews } = await getPaginatedNews(1, 3, "business");
  
  // console.log(news);
  news.sort((a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1));
  flipnews.sort((a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1));
  return (
    <main className="min-h-screen bg-gray-50 max-w-7xl m-auto">
      <NewsCarousel news={news} />
      <FlipFlopSection news={flipnews} />


      
      <div className="px-8">
        <Link href={"/news?category=politics"}>
        <h2 className="text-center text-4xl mt-14 mb-4 font-extrabold hover:text-pink-700 active:text-primary/80 transition-colors">Politics</h2>
        </Link>
        <h4 className="text-center text-xl mb-8 font-normal">Analysed. Simplified. Explained.</h4>
        <NewsPage news={politicsNews} />
      </div>

      <div className="px-8">
        <Link href={"/news?category=world"}>
        <h2 className="text-center text-4xl mt-14 mb-4 font-extrabold hover:text-pink-700 active:text-primary/80 transition-colors">World</h2>
        </Link>
        <h4 className="text-center text-xl mb-8 font-normal">Around the world in 60 seconds</h4>
        
        <NewsPage news={worldNews} />
      </div>

      <div className="px-8">
        <Link href={"/news?category=sports"}>
        <h2 className="text-center text-4xl mt-14 mb-4 font-extrabold hover:text-pink-700 active:text-primary/80 transition-colors">Sports</h2>
        </Link>
        <h4 className="text-center text-xl mb-8 font-normal">The latest in sports</h4>
        <NewsPage news={sportsNews} />
      </div>


      <div className="px-8">
        <Link href={"/news?category=business"}>
        <h2 className="text-center text-4xl mt-14 mb-4 font-extrabold hover:text-pink-700 active:text-primary/80 transition-colors">Business</h2>
        </Link>
        <h4 className="text-center text-xl mb-8 font-normal">The latest in business</h4>
        <NewsPage news={businessNews} />
      </div>
        
      

      
      {/* Footer */}
      <div className="flex justify-center items-center text-gray-500 mt-16 mb-10">
          <Newspaper className="w-5 h-5 mr-2 " />
          <span className="text-sm">Updated hourly</span>
        </div>
    </main>
  );
}
