import NewsDisplay from "@/components/Individual-news";
import { getNewsFromId } from "@/lib/newsquery";

export default async function IndividualNews({params}:{params:Promise<{id:string}>}){
    const {id}=await params;
    const news=await getNewsFromId(id);
    // console.log(news);
    if(news)
    return <NewsDisplay news={news}/>
    else 
    return "No news heres"
}