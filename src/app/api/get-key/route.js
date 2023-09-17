import { Deta } from 'deta'
import { NextResponse } from 'next/server';

const deta = Deta(process.env.DETA_PROJECT_KEY)
const db = deta.Base("store-keys")

export async function GET(request) {
    const body = await request.json();

    const store = await db.fetch()

    return NextResponse.json(store)
}