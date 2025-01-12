import { getUserCollection, updateCollectionAttendance } from '@/components/features/databaseFunctions';

import { NextResponse } from 'next/server';

export async function POST(request) {
    const body = await request.json();

    let base = await getUserCollection(body.key)
    let data = base.attendance
    
    if(parseInt(data.currentWeek) !== body.currentWeek){
      data.currentWeek = body.currentWeek
      data.monday = body.monday
      data.tuesday = body.tuesday
      data.wednesday = body.wednesday
      data.thursday = body.thursday
      data.friday = body.friday
    
    
    let updated = updateCollectionAttendance(body.key, data)
    
    
    return NextResponse.json(updated)
    }
    return NextResponse.json("Already Signed")
}


