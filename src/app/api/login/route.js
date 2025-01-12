import { signJwtAccessToken } from "@/lib/jwt";
import { NextResponse } from 'next/server'
import * as bcrypt from "bcrypt";
import { DB, getUserCollection } from "@/components/features/databaseFunctions";

export async function POST(request) {
    const body = await request.json();
    
   
    
    const user = await getUserCollection(body.school_code)

    
    if ((user && user.school_email === body.school_email) && (await bcrypt.compare(body.password, user.password))) {

        const { password, members, attendance, school_address,school_email,school_number, school_slogan,coordinates,school_admin, posts, reset_tokens, school_meetings, user_faces,  ...userWithoutPass } = user;
 
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
          ...userWithoutPass,
          accessToken,
        };
      
      return NextResponse.json(result);
    } else return NextResponse.json(null);
  }
 