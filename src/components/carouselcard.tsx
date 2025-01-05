import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { INews } from "@/lib/newsquery";
import { Calendar } from "lucide-react"; // Importing the Calendar icon from Lucide
import { Button } from "./ui/button";
import Link from "next/link";

const CarouselCard = ({ news }: { news: INews }) => {
  return (
    <Card className="flex flex-col sm:flex-row w-full bg-white shadow-lg hover:shadow-xl  transition-all duration-300 rounded-lg overflow-hidden">
      {/* Image Section with Gradient Overlay */}
      <div className="relative  sm:w-2/5  md:w-1/3  overflow-hidden">
        <img
          src={news.imageUrl}
          alt={news.heading}
          className="w-full h-full object-cover"
        />
       
      </div>
      
      {/* Content Section */}
      <CardContent className="flex-1 p-6 relative">
        <Link href={`/news/${news.id}`} >
        <h3 className="text-2xl font-bold text-gray-800 line-clamp-2 hover:text-blue-600">{news.heading}</h3>
        </Link>
        <p className="text-gray-600 mb-3 mt-2 line-clamp-3">{news.description}</p>
        <p className="text-sm text-gray-500 line-clamp-2 italic">By {news.report}</p>
        
        {/* Tags */}
        <div className="flex gap-2 mt-3 flex-wrap">
          {news.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gray-200 text-gray-700 hover:bg-gray-300">
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Footer with Date and Read More Button */}
        <CardFooter className="flex items-center justify-between mt-4 text-sm text-gray-500 p-0">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600 font-semibold">{new Date(news.time).toLocaleDateString("en-US", {
              weekday: 'short', year: 'numeric', month: 'short', day: 'numeric'
            })}</span>
          </div>
          <Link href={`/news/${news.id}`}>
          <Button variant={"link"}>Read More</Button>
          </Link>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default CarouselCard;
