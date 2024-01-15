import { Deta } from "deta";
import { NextResponse } from "next/server";

const deta = Deta(process.env.DETA_PROJECT_KEY);
const base = deta.Base("schools_db");

export async function POST(request) {
  try {
    const formData = await request.formData();

    let keyId;
    let meeting;
    let file;

    for (const [key, value] of formData.entries()) {
      if (key === 'key') {
        keyId = value;
      }
      if (key === "meeting") {
        meeting = JSON.parse(value);
      }
      if (key === "agenda_file") {
        const fileBuffer = await value.arrayBuffer();
        file = new Uint8Array(fileBuffer);
      }
    }

    const drive = deta.Drive(keyId);

    // Use "application/pdf" or the appropriate content type based on your file type
    await drive.put(meeting.fileName, { data: file, content_type: "application/pdf" });

    const data = await base.get(keyId);
    const meetings = data ? data.school_meetings || [] : [];
    meetings.push(meeting);

    await base.update({ school_meetings: meetings }, keyId);

    return NextResponse.json({ message: 'POST method processed successfully' });
  } catch (error) {
    console.error('Error uploading file to Deta Drive:', error);
    return NextResponse.json({ error: 'Failed to process the POST method' }, { status: 500 });
  }
}
