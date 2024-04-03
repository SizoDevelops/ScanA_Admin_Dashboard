import { signJwtAccessToken } from "@/lib/jwt";
import { NextResponse } from 'next/server'
import * as bcrypt from "bcrypt";
import { Deta } from 'deta'

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("schools_db")


export async function POST(request) {
    const body = await request.json();
    
    const user = await db.fetch({
        "school_email": body.school_email, 
        "school_code": body.school_code 
    })

    
    if (user.count > 0 && (await bcrypt.compare(body.password, user.items[0].password))) {

        const { password, members, attendance, school_address,school_code,school_email,school_number, school_slogan,coordinates,school_admin, posts, reset_tokens, school_meetings, user_faces,  ...userWithoutPass } = user.items[0];
 
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
          ...userWithoutPass,
          accessToken,
        };
      return NextResponse.json(result);
    } else return NextResponse.json(null);
  }
 