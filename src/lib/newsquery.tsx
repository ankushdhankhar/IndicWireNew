import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore/lite"
import { db } from "./firebase"

export interface INews {
    heading: string,
    description: string,
    report: string,
    imageUrl: string,
    tags: string[]
    time: number
    id:string
}

export interface IFlipnews {
    heading1: string,
    description1: string,
    report1: string,
    imageUrl1: string,
    heading2: string,
    description2: string,
    report2: string,
    imageUrl2: string,
    time: number
    id:string
}

export async function getAllNews(page?:number) {
    
    const newsQuery = query(collection(db, 'news'),limit(12));
    const newsDocs = await getDocs(newsQuery);
   
       const  news = newsDocs.docs.map((doc =>
            ({
                id: doc.id,
                ...doc.data() 
            } as INews)))
    return news
}


export async function getAllFlipNews() {
    const newsQuery = query(collection(db, 'flipnews'));
    const newsDocs = await getDocs(newsQuery);
   
       const  news = newsDocs.docs.map((doc =>
            ({
                id: doc.id,
                ...doc.data()
            }as IFlipnews)))
  
    return news
}

export async function getNewsFromId(id:string){
    const newsRef= doc(db,"news",id);
    const newsSnap=await getDoc(newsRef);
    return newsSnap.data() as INews
}
export async function getFlipNewsFromId(id:string){
    const newsRef= doc(db,"flipnews",id);
    const newsSnap=await getDoc(newsRef);
    return newsSnap.data() as IFlipnews
}

export async function getPaginatedNews(page:number=1, pageSize:number=12,category?:string) {
    const newsRef = collection(db, "news"); // Replace with your collection
    if(category===undefined)category="all";
    // 1. Initial Query
    let querySnapshot;
    if (page === 1) {
      querySnapshot = await getDocs(query(newsRef, limit(pageSize),where('tags',"array-contains",category)));
    } else {
      // 2. Get the last document from the previous page
      const lastDoc = await getDocs(query(newsRef,  limit((page - 1) * pageSize),where('tags',"array-contains",category)));
      const lastVisible = lastDoc.docs[lastDoc.docs.length - 1];
  
      // 3. Create a new query starting after the last document
      querySnapshot = await getDocs(query(newsRef,  startAfter(lastVisible), limit(pageSize)));
    }
  
    // Process the data from the current page
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as INews));
  
    // Check if there are more pages
    const hasMore = querySnapshot.docs.length === pageSize;
  
    return { data, hasMore };
  }

  export async function getPaginatedFlipNews(page:number=1, pageSize:number=12) {
    const newsRef = collection(db, "flipnews"); // Replace with your collection
  ;
    // 1. Initial Query
    let querySnapshot;
    if (page === 1) {
      querySnapshot = await getDocs(query(newsRef, limit(pageSize)));
    } else {
      // 2. Get the last document from the previous page
      const lastDoc = await getDocs(query(newsRef,  limit((page - 1) * pageSize)));
      const lastVisible = lastDoc.docs[lastDoc.docs.length - 1];
  
      // 3. Create a new query starting after the last document
      querySnapshot = await getDocs(query(newsRef,  startAfter(lastVisible), limit(pageSize)));
    }
  
    // Process the data from the current page
    const data = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as IFlipnews));
  
    // Check if there are more pages
    const hasMore = querySnapshot.docs.length === pageSize;
  
    return { data, hasMore };
  }