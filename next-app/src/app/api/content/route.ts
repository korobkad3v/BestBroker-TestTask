import { NextResponse } from 'next/server';
import { headers } from 'next/headers'
import path from 'path';
import fs from 'fs';

export async function GET() {
    const headersList = await headers();
    const apiKey = headersList.get('x-api-key');
    console.log(apiKey);
    console.log(process.env.API_KEY);
    if (apiKey !== process.env.API_KEY) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const filePath = path.join(process.cwd(), 'dictionaries', 'en.json');
    console.log(filePath);
    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(fileContents);
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to load content' }, { status: 500 });
    }
}