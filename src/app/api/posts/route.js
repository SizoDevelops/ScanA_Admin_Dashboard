
import { NextResponse } from 'next/server'

export async function POST(request) {
    const body = await request.json()
        // const data = await base.get(body.key)
        // const updatedPosts = data.posts ? data.posts : []
        // updatedPosts.push(body.post)

        // await base.update({posts: updatedPosts}, body.key)

        // return NextResponse.json({message: "Success"})

}