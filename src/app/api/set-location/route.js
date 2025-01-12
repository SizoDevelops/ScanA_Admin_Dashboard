import { getUserCollection, updateCollectionLocation } from '@/components/features/databaseFunctions';

import { NextResponse } from 'next/server';

export async function POST(request) {
    const body = await request.json();

 
    let base = await getUserCollection(body.key)
    let data = base.coordinates

    if(body.latitude !== "" && body.longitude !== "" && body.distance !== 0){
      data.latitude = body.latitude
      data.longitude = body.longitude
      data.distance = parseInt(body.distance)
    }
    else {
      return NextResponse.json("Invalid Information")
    }
    
    let updated = updateCollectionLocation(body.key, data)


   
    return NextResponse.json(updated)
}