
import { NextResponse } from 'next/server'


export async function POST(request) {
    // const body = await request.json();
    // const userDB = await db.get(body.key)
    // const dbMovementCodes = userDB.movementCodes || [];

    // try {
    //     if(body.method === "remove"){
    //         let newData = dbMovementCodes.filter(item => item.code !== body.code)
    //         await db.update({movementCodes: newData}, body.key)
    //         return NextResponse.json({message: "Code Removed", status: 200})
    //     }
    //     else if(body.method === "add" && dbMovementCodes.find(item => item.code === body.data.code)){
      
    //         return NextResponse.json({message: "Code Already Generated", status: 200})
    //     }
    //     else {
    //         dbMovementCodes.push(body.data)
    //         await db.update({movementCodes: dbMovementCodes}, body.key)
    //         return NextResponse.json({message: "Code Generated", status: 200})
    //     }
    // } catch (error) {
    //     return NextResponse.json({message: "Something went wrong", status: 500})
    // }
}


