import {Deta} from 'deta'
import { NextResponse } from 'next/server'
const base = Deta(process.env.DETA_PROJECT_KEY);


const db = base.Base("schools_db");

export async function POST(request) {
    const body = await request.json();
    const userDB = await db.get(body.key)
    const dbMovementCodes = userDB.movementCodes || [];

    try {
        if(dbMovementCodes.find(item => item.code === body.data.code)){
            return NextResponse.json({message: "Code Already Generated", status: 200})
        }
        else {
            dbMovementCodes.push(body.data)
            await db.update({movementCodes: dbMovementCodes}, body.key)
            return NextResponse.json({message: "Code Generated", status: 200})
        }
    } catch (error) {
        return NextResponse.json({message: "Something went wrong", status: 500})
    }
}


