// app/api/comments/[id]/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
    return NextResponse.json([
        {
            _id: '1',
            user: 'John Doe',
            text: 'Awesome video!',
            createdAt: new Date().toISOString()
        },
        {
            _id: '2',
            user: 'Jane Smith',
            text: 'Very informative. Thanks!',
            createdAt: new Date().toISOString()
        }
    ])
}
