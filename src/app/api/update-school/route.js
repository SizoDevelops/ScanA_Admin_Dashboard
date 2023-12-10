import { Deta } from 'deta'
import { NextResponse } from 'next/server';

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("schools_db")
const lodash = require('lodash')

export async function POST(request) {
    const body = await request.json();

    const user = await db.get(body.key)

    if(lodash.isEqual(body.user, user)){
        return NextResponse.json("User Details Unchanged")
    }
    else {
        user.shool_name = body.user.school_name
        user.school_slogan = body.user.school_slogan
        user.school_email = body.user.school_email
        user.school_number = body.user.school_number
        user.school_address = body.user.school_address
        user.school_admin = body.user.school_admin
    }
    const updateUser = await  db.put(user, body.key)
    

    return NextResponse.json(updateUser)
}