import { Deta } from 'deta'
import { NextResponse } from 'next/server';

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("schools_db")

export async function POST(request) {
    const body = await request.json();

    const user = await db.get(body.key)
    const members = user.members.concat(body.data)
    const updateUser = await  db.update({members: members}, body.key)
    

    return NextResponse.json(updateUser)
}