import { Deta } from 'deta'
import { NextResponse } from 'next/server';

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("schools_db")

export async function POST(request) {
    const body = await request.json();

    const user = await db.get(body.key)
    const updated_user = user.members.find(elem => elem.id === body.id)
    if(body.delete_user === true) {
        const members = user.members.filter(item => item.id !== body.id)
        const updateUser = await  db.update({members: members}, body.key)
        return NextResponse.json(updateUser)
    }


    if(body.block_user === true || body.block_user === false) {updated_user.block_user = body.block_user}
    
    if(body.pause_register === true || body.pause_register === false) {updated_user.pause_register = body.pause_register}

   
    const members = user.members.filter(item => item.id !== body.id)
    const newM = members.concat([updated_user])
    const updateUser = await  db.update({members: newM}, body.key)

    return NextResponse.json(updateUser)
}