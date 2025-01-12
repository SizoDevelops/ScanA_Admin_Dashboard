
import { NextResponse } from 'next/server'


export async function POST(request) {
    const body = await request.json()

    const data = "await base.get(body.key)"
        const meetings = data.school_meetings ? data.school_meetings : []
        const meet = meetings.filter(meeting => meeting.id !== body.id)
    
       

        return NextResponse.json({ message: 'POST method processed successfully' });
}   