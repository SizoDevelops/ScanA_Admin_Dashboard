
import { NextResponse } from 'next/server';

import { collection, doc, setDoc, where, query, getDocs, CACHE_SIZE_UNLIMITED, getDoc, updateDoc } from "firebase/firestore"; 
import app from "@/lib/firebase";
import { initializeFirestore} from "firebase/firestore";



const db = initializeFirestore(app,{
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})

export async function POST(request) {
    const body = await request.json();

    const user = await getDoc(doc(db, "users", body.key))
    
    if(user.exists()){
      const members = user.data().members.concat(body.data)  
      const updateUser = await  updateDoc(doc(db, "users", body.key), {members: members})
      return NextResponse.json(updateUser)
    }
    
    else{
        return NextResponse.json("Users can't be added")
    }
    

    
}