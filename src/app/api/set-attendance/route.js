import { Deta } from 'deta'
import { NextResponse } from 'next/server';

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("schools_db")

export async function POST(request) {
    const body = await request.json();

    let base = await db.get(body.key)
    let data = base.attendance
    
    if(parseInt(data.currentWeek) !== body.currentWeek){
      data.currentWeek = body.currentWeek
      data.monday = body.monday
      data.tuesday = body.tuesday
      data.wednesday = body.wednesday
      data.thursday = body.thursday
      data.friday = body.friday
    
    
    let updated = await db.update({attendance: data}, body.key)
    
    
    return NextResponse.json(base)
    }
    return NextResponse.json("Already Signed")
}


