import FlipNewsGrid from "@/components/flip-flop-newsgrid";
import FlipFlopSection from "@/components/flip-flop-section";
import PaginationButton from "@/components/pagination-buttons";
import { Button } from "@/components/ui/button";
import { getAllFlipNews, getPaginatedFlipNews } from "@/lib/newsquery";
import { ChevronLeft, ChevronRight, Newspaper } from "lucide-react";
import Link from "next/link";

const FlipNewsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  let { page } = await searchParams;

  if (page === undefined) page = "1";
  let pageNo = parseInt(page as string);
  console.log(page, pageNo);

  const { data: flipnews, hasMore } = await getPaginatedFlipNews(pageNo, 12);
  flipnews.sort((a, b) => (new Date(a.time) > new Date(b.time) ? -1 : 1));
  const nextPageUrl = `/news?page=${pageNo + 1}`;
  const prevPageUrl = `/news?page=${pageNo - 1}`;
  return (
    <>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Page Header */}
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center justify-center">
              <Newspaper className="w-8 h-8 mr-2 text-blue-600" />
              Flip-Flop News
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our curated selection of top stories. Flip
              through for quick insights on various topics.
            </p>
          </div>

          {/* News Grid */}
          <FlipNewsGrid news={flipnews} />
        </div>
        <div className="flex justify-between mt-4">
          <PaginationButton
            direction="previous"
            href={prevPageUrl}
            isEnabled={pageNo > 1}
          />
          <PaginationButton
            direction="next"
            href={nextPageUrl}
            isEnabled={hasMore}
          />
        </div>
      </main>
    </>
  );
};

export default FlipNewsPage;
