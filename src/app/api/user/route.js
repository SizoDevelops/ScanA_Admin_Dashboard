import { NextResponse } from 'next/server';
import { collection, doc, setDoc, where, query, getDocs, CACHE_SIZE_UNLIMITED, getDoc } from "firebase/firestore"; 
import app from "@/lib/firebase";
import { initializeFirestore} from "firebase/firestore";



const db = initializeFirestore(app,{
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})


export async function POST(request) {
    const body = await request.json();

    const user = await getDoc(doc(db, "users", body.key))
    
    if (user.exists()){
        
       return NextResponse.json(user.data()) 
    }
    else{
        return NextResponse.json("User Already Exists")
    }

}