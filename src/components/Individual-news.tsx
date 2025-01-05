import { Badge } from "@/components/ui/badge"; // Assume shadcn Badge component is available
import { Calendar } from "lucide-react"; // Icon for date
import { INews } from "@/lib/newsquery";

const NewsDisplay = ({ news }: { news: INews }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6 space-y-6">
      {/* Image Section */}
      <div className="w-full h-80 rounded-lg overflow-hidden">
        <img
          src={news.imageUrl}
          alt={news.heading}
          className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105 duration-300"
        />
      </div>

      {/* Tags, Date, and Description */}
      <div className="space-y-4">
        {/* Tags */}
        <div className="flex gap-2 flex-wrap">
          {news.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span>{new Date(news.time).toLocaleDateString("en-US", {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
          })}</span>
        </div>

      {/* Report Attribution */}
        <p className="text-gray-700 leading-relaxed">
        {news.report}
          </p>
      </div>

        {/* Description */}
      <div className="italic text-gray-600 text-sm">
          {news.description}
      </div>
    </div>
  );
};

export default NewsDisplay;
