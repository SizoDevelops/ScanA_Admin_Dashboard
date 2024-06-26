import { Deta } from 'deta'
import { NextResponse } from 'next/server';

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("schools_db")

export async function POST(request) {
    const body = await request.json();

 
    let base = await db.get(body.key)
    let data = base.coordinates

    if(body.latitude !== "" && body.longitude !== "" && body.distance !== 0){
      data.latitude = body.latitude
      data.longitude = body.longitude
      data.distance = parseInt(body.distance)
    }
    else {
      return NextResponse.json("Invalid Information")
    }
    
    let updated = await db.update({coordinates: data}, body.key)


   
    return NextResponse.json(updated)
}