import { Deta } from 'deta'
import { NextResponse } from 'next/server';
const _ = require('lodash');
const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("schools_db")

export async function POST(request) {
    const body = await request.json();

    const user = await db.get(body.key)

    // Users that match the ID which should be one user
    const updated_user = user.members.find(elem => elem.id === body.user_details.id)
//  Delete User From Users
if(body.delete_user === true){
    // Return users that don't match the ID
    const newUsers = user.members.filter(users => users.id !== body.user_details.id)
    // Updates the users list in the DB
    const updateUser = await  db.update({members: newUsers}, body.key)
   
    return NextResponse({message: "User Deleted Successfully", user: updateUser})
}

// Update User Details

if(_.isEqual(body.user_details, updated_user)){
    return NextResponse.json("User Details Unchanged")
}
else {
    // Change User
    updated_user.title = body.user_details.title
    updated_user.initial = body.user_details.initial
    updated_user.first_name = body.user_details.first_name
    updated_user.last_name = body.user_details.last_name
    updated_user.email = body.user_details.email,
    updated_user.position = body.user_details.position,
    updated_user.phone_number = body.user_details.phone_number
    updated_user.persal = body.user_details.persal
    updated_user.subjects  = body.user_details.subjects
    }
    const members = user.members.filter(item => item.id !== body.user_details.id)
    const newM = members.concat([updated_user])
    const updateUser = await  db.update({members: newM}, body.key)

    return NextResponse.json("User Updated")
}