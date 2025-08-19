import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { ISessionData } from '@/types/session';

export const sessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD || 'complex_password_at_least_32_characters_long',
  cookieName: 'healthcare-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
};

export async function getSession(): Promise<ISessionData> {
  const cookieStore = await cookies();
  const session = await getIronSession<ISessionData>(cookieStore, sessionOptions);
  return session;
}

export async function login(userId: string, username: string) {
  const cookieStore = await cookies();
  const session = await getIronSession<ISessionData>(cookieStore, sessionOptions);
  session.userId = userId;
  session.username = username;
  session.isLoggedIn = true;
  await session.save();
}

export async function logout() {
  const cookieStore = await cookies();
  const session = await getIronSession<ISessionData>(cookieStore, sessionOptions);
  session.destroy();
}

