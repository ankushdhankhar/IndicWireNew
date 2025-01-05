"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { INews } from "@/lib/newsquery";
import CarouselCard from "./carouselcard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NewsCarousel = ({
  news,
  onSeeAll,
}: {
  news: INews[];
  onSeeAll?: () => void;
}) => {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-8 overflow-">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Latest News</h2>
        <Link href={"/news"}>
          <Button onClick={onSeeAll} variant="outline">
            See All News
          </Button>
        </Link>
      </div>
      <Carousel
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {news.map((item, index) => (
            <CarouselItem key={index}>
              <CarouselCard news={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[90%] top-[110%] rounded-none scale-110 shadow-md shadow-black">
          Prev
        </CarouselPrevious>
        <CarouselNext className="absolute right-[2%] top-[110%] rounded-none scale-110 shadow-md shadow-black" />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
