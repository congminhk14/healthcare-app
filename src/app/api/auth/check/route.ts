import { NextResponse } from 'next/server';
import { getSession } from '@/lib/session';

export async function GET() {
  try {
    const session = await getSession();
    
    return NextResponse.json({
      isAuthenticated: !!session.isLoggedIn,
      user: session.isLoggedIn ? {
        userId: session.userId,
        username: session.username
      } : null
    });
  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({
      isAuthenticated: false,
      user: null
    });
  }
}
