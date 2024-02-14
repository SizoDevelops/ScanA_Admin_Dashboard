import {Deta} from 'deta'
import { NextResponse } from 'next/server'

const deta = Deta(process.env.DETA_PROJECT_KEY)

const base = deta.Base("schools_db")

export async function POST(request) {
    const body = await request.json()   
    const data = await base.fetch({"reset_tokens.token": body.token})
    if(data.count > 0 && data.items[0].reset_tokens && !data.items[0].reset_tokens.used && data.items[0].reset_tokens.expires > Date.now()){
        return NextResponse.json("Valid Token")
    }
    else {
        console.log(data.items)
        return NextResponse.json("Invalid Token")}
}