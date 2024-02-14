import { NextResponse } from "next/server";
import { Deta } from "deta";
import * as bcrypt from "bcrypt";


const deta = Deta(process.env.DETA_PROJECT_KEY);
const db = deta.Base("schools_db");

export async function POST(request) {
  const body = await request.json();

   const schoolSearch = await db.fetch([{"school_email": body.school_email}, {"school_emis": body.school_emis}])

  const data = body.data

  data.password = await bcrypt.hash(body.password, 10);
if(schoolSearch.count < 1){
  const {confirm_password, ...user} = data
  const school = await db.insert(user, data.school_code);
  const {password, ...result} = school;

  return NextResponse.json(result)
}

else {
  return NextResponse.json("User Already Exists")
}

}
