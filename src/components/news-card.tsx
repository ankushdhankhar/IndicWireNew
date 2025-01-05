import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { INews } from "@/lib/newsquery";

function formatDate(timestamp: number): string {
  const date = new Date(timestamp);
  return date
    .toLocaleDateString("en-GB", {
      //TODO:fix this
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
}

export default function NewsCard({
  news,
  flipflop,
}: {
  news: INews;
  flipflop?: boolean;
}) {
  return (
    <Card className="transition-all duration-75 ease-in-out  max-w-[360px] h-[450px] flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-[3/2]">
          <Image
            src={news.imageUrl}
            alt={news.heading}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between p-4">
        <div>
          <h3 className="font-bold text-xl leading-tight line-clamp-2 mb-2">
            {news.heading}
          </h3>
          <p className="line-clamp-3 text-sm text-gray-600">
            {news.description}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4">
        <p className="text-sm text-gray-600">{formatDate(news.time)}</p>
        <Button
          asChild
          variant="outline"
          className="bg-pink-50 border-pink-300 transition-transform"
        >
          <Link href={`/${flipflop ? "flipnews" : "news"}/${news.id}`}>
            Read more &rarr;
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
