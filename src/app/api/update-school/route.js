import { getUserCollection, setUserCollection } from '@/components/features/databaseFunctions';

import { NextResponse } from 'next/server';

const lodash = require('lodash')

export async function POST(request) {
    const body = await request.json();

    const user = await getUserCollection(body.key)

    if(lodash.isEqual(body.user, user)){
        return NextResponse.json("User Details Unchanged")
    }
    else {
        user.school_slogan = body.user.school_slogan
        user.school_email = body.user.school_email
        user.school_number = body.user.school_number
        user.school_address = body.user.school_address
        user.school_admin = body.user.school_admin
    }
    const updateUser = setUserCollection(body.key, user)
    

    return NextResponse.json(updateUser)
}