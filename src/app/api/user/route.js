import { NextResponse } from 'next/server';

import { getUserCollection } from '@/components/features/databaseFunctions';



export async function POST(request) {
    const body = await request.json();

    const user = await getUserCollection(body.key)
    
    if (user){
        
       return NextResponse.json(user) 
    }
    else{
        return NextResponse.json("User Already Exists")
    }

}