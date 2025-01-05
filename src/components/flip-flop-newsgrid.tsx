import { IFlipnews } from "@/lib/newsquery"
import Flipnews from "./flip-news-card"



export default function FlipNewsGrid({ news }: {news:IFlipnews[]}) {
  if (news.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-gray-900">No news available</h2>
        <p className="mt-2 text-gray-600">Check back later for updates.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item, index) => (
        
          <Flipnews key={index} news={item} />
        
      ))}
    </div>
  )
}