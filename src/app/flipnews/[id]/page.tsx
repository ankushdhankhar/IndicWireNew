import FlipNewsDisplay from "@/components/Individual-flipnews";
import NewsDisplay from "@/components/Individual-news";
import { getFlipNewsFromId, getNewsFromId } from "@/lib/newsquery";

export default async function IndividualFlipNews({params}:{params:Promise<{id:string}>}){
    const {id}=await params;
    const news=await getFlipNewsFromId(id);
    // console.log(news);
    if(news)
    return <FlipNewsDisplay news={news}/>
    else 
    return "No news heres"
}