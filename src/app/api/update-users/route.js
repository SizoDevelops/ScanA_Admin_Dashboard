
import { NextResponse } from 'next/server';

import { collection, doc, setDoc, where, query, getDocs, CACHE_SIZE_UNLIMITED, getDoc, updateDoc } from "firebase/firestore"; 
import app from "@/lib/firebase";
import { initializeFirestore} from "firebase/firestore";
import { getUserCollection, updateCollectionMembers } from '@/components/features/databaseFunctions';



const db = initializeFirestore(app,{
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})

export async function POST(request) {
    const body = await request.json();

    const user = await getUserCollection(body.key)
    
    if(user){
      const members = user.members.concat(body.data)  
      const updateUser =  await updateCollectionMembers(body.key, members)
      return NextResponse.json(updateUser)
    }
    
    else{
        return NextResponse.json("Users can't be added")
    }
    

    
}