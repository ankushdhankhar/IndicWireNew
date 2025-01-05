import NewsGrid from '@/components/news-grid';
import PaginationButton from '@/components/pagination-buttons';
import { getPaginatedNews } from '@/lib/newsquery';

export default async function  NewsPage({searchParams}:{searchParams:Promise<{ [key: string]: string | string[] | undefined }>}) {
    let {page,category}=(await searchParams);
  
    if(page===undefined)page="1";
    let pageNo=parseInt(page as string);
    
    const {data:news,hasMore}=await getPaginatedNews(pageNo,12,category as string);
    const nextPageUrl = `/news?page=${pageNo + 1}${category ? `&category=${category}` : ''}`
  const prevPageUrl = `/news?page=${pageNo - 1}${category ? `&category=${category}` : ''}`

  const formatCategory = (category: string) => {
    return category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
      {category && (
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-primary">
            {formatCategory(category as string)}
          </h2>
          <div className="mt-2 inline-block border-b-2 border-primary w-20"></div>
        </div>
      )}
        <p className="text-xl text-gray-600">Stay informed with our up-to-the-minute news coverage</p>
      </header>

    

      <NewsGrid news={news} />
      
      <div className="flex justify-between mt-8">
        <PaginationButton direction="previous" href={prevPageUrl} isEnabled={pageNo > 1} />
        <PaginationButton direction="next" href={nextPageUrl} isEnabled={hasMore} />
      </div>
    </div>
)
}