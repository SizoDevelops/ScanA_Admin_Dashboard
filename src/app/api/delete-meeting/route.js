import {Deta} from 'deta'
import { NextResponse } from 'next/server'

const deta = Deta(process.env.DETA_PROJECT_KEY)

const base = deta.Base("schools_db")

export async function POST(request) {
    const body = await request.json()

    const data = await base.get(body.key)
        const meetings = data.school_meetings ? data.school_meetings : []
        const meet = meetings.filter(meeting => meeting.id !== body.id)
        const drive = deta.Drive(body.key);
        await drive.delete(body.fileName)
        await base.update({school_meetings: meet}, body.key)

        return NextResponse.json({ message: 'POST method processed successfully' });
}   