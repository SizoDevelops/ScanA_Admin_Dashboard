import { Deta } from 'deta'
import { NextResponse } from 'next/server';

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("store-keys")

export async function POST(request) {
    const body = await request.json();

    const store = await db.put(body.key, body.key)

    return NextResponse.json(store)
}