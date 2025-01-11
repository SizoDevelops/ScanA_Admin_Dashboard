import { NextResponse } from "next/server";
import * as bcrypt from "bcrypt";
import { collection, doc, setDoc, where, query, getDocs, CACHE_SIZE_UNLIMITED } from "firebase/firestore"; 
import app from "@/lib/firebase";
import { initializeFirestore} from "firebase/firestore";



const db = initializeFirestore(app,{
  cacheSizeBytes: CACHE_SIZE_UNLIMITED
})

export async function POST(request) {
  const body = await request.json();
  
  const q = query(collection(db, "users"), where("school_email", "==", body.school_email));
  const schoolSearch = await getDocs(q)
  const data = body.data

  data.password = await bcrypt.hash(body.password, 10);

if(schoolSearch.empty){
  const {confirm_password, ...user} = data

  await setDoc(doc(db, "users", data.school_code), user);
  
  const {password, ...result} = user;
  console.log(result)
  return NextResponse.json(result)
}

else {

  return NextResponse.json("User Already Exists")
}

}
