import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const corsOrigins = ['*'];

export default function middleware(req: NextRequest) {
    debugger;
    const origin = req.headers.get('origin');
    const res = NextResponse.next();

    // Set CORS headers
    res.headers.set('Access-Control-Allow-Credentials', 'true');
    res.headers.set('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT');
    res.headers.set(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (corsOrigins.includes('*') || corsOrigins.includes(origin || '')) {
        res.headers.set('Access-Control-Allow-Origin', origin || '*');
    }

    return res;
}

export const config = {
    matcher: '/api/:path*', // Match all API routes
};