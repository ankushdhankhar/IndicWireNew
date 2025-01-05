import { IFlipnews } from "@/lib/newsquery"
import Flipnews from "./flip-news-card"
import { Newspaper } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function FlipFlopSection({ news }: { news: IFlipnews[] }) {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:pt-20 lg:pb-3">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center">
        <Link href={"/flipnews"}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 hover:text-pink-700 active:text-primary/80 transition-colors">
            Flip-Flop News
          </h2>
          </Link>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our curated selection of top stories. Flip through for quick insights.
          </p>
        </div>

        {/* News Grid */}
        <Card className="border-none shadow-none">
          <CardContent className="p-6 sm:p-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((item, index) => (
                <div key={index} className="flex">
                  <Flipnews news={item} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        
      </div>
    </section>
  )
}