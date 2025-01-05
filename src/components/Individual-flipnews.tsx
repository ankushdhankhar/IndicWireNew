'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { IFlipnews } from '@/lib/newsquery'



function formatDate(timestamp: number): string {
  const date = new Date(timestamp)
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function FlipFlopNewsPage({ news }: { news: IFlipnews }) {
  const [isFlipped, setIsFlipped] = useState(false)

  const toggleView = () => {
    setIsFlipped(!isFlipped)
  }

  const currentView = isFlipped ? 2 : 1

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">
              {isFlipped ? news.heading2 : news.heading1}
            </h1>
            {/* <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">View {currentView}</span>
              <Switch checked={isFlipped} onCheckedChange={toggleView} />
            </div> */}
          </div>
          <p className="text-gray-500">Published on: {formatDate(news.time)}</p>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-[400px] mb-6">
            <Image
              src={isFlipped ? news.imageUrl2 : news.imageUrl1}
              alt={isFlipped ? news.heading2 : news.heading1}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <p className="text-xl m-10">
            {isFlipped ? news.description2 : news.description1}
          </p>
          <div className="prose max-w-none">
            {isFlipped ? (
              <div dangerouslySetInnerHTML={{ __html: news.report2 }} />
            ) : (
              <div dangerouslySetInnerHTML={{ __html: news.report1 }} />
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={toggleView} className="w-full">
            Switch to View {isFlipped ? 1 : 2}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}