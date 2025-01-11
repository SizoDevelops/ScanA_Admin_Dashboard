import { signJwtAccessToken } from "@/lib/jwt";
import { NextResponse } from 'next/server'
import * as bcrypt from "bcrypt";
import { collection, doc, setDoc, where, query, getDocs, CACHE_SIZE_UNLIMITED, getDoc } from "firebase/firestore"; 
import app from "@/lib/firebase";
import { initializeFirestore} from "firebase/firestore";



const db = initializeFirestore(app,{
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})


export async function POST(request) {
    const body = await request.json();
    
   
    
    const user = await getDoc(doc(db, "users", body.school_code))


    
    if ((user.exists() && user.data().school_email === body.school_email) && (await bcrypt.compare(body.password, user.data().password))) {

        const { password, members, attendance, school_address,school_email,school_number, school_slogan,coordinates,school_admin, posts, reset_tokens, school_meetings, user_faces,  ...userWithoutPass } = user.data();
 
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
          ...userWithoutPass,
          accessToken,
        };
      
      return NextResponse.json(result);
    } else return NextResponse.json(null);
  }
 