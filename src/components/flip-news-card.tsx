'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import NewsCard from './news-card'
import { IFlipnews, INews } from '@/lib/newsquery'

export default function FlipFlopCard({ news }: { news: IFlipnews }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const news1: INews = {
    heading: news.heading1,
    description: news.description1,
    imageUrl: news.imageUrl1,
    id: news.id,
    report: news.report1,
    tags: [],
    time: news.time
  }

  const news2: INews = {
    heading: news.heading2,
    description: news.description2,
    imageUrl: news.imageUrl2,
    id: news.id,
    report: news.report2,
    tags: [],
    time: news.time
  }

  return (
    <div className="flip-card-container max-w-[360px] mx-auto w-full">
      <div className="relative w-full h-[450px]">
        <div
          className={`absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''
            }`}
        >
          <div className="absolute w-full h-full [backface-visibility:hidden]">
            <NewsCard news={news1} flipflop/>
          </div>
          <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <NewsCard news={news2} flipflop/>
          </div>
        </div>
      </div>
      <Button
        onClick={handleFlip}
        className={`w-full rounded-t-none ${isFlipped ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
          }`}
      >
        Flip News
      </Button>
    </div>
  )
}