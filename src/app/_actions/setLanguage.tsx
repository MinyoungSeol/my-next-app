'use server';

import { cookies } from 'next/headers';

export async function setLanguage(lang: 'en' | 'ko') {
  const cookieStore = await cookies();
  cookieStore.set('lang', lang, {
    httpOnly: false,
    path: '/',
    maxAge: 60 * 60 * 24 * 30, // 30일 유지
  });
}