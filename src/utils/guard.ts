import { redirect } from '@tanstack/react-router';
import { account } from '../lib/appwrite';

export async function GuestGuard() {
  const user = await account.get().catch(() => null);
  if (!user) throw redirect({ to: '/login' });
}

export async function AuthedGuard() {
  const user = await account.get().catch(() => null);
  console.log(user);
  if (user) throw redirect({ to: '/' });
  return null;
}
