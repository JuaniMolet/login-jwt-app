'use client';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
const Welcome = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">Bienvenido </h1>
      <p className="text-lg text-center mt-4">
        Ir al
        <Link prefetch={true} href="/api/auth/login">
          Login
        </Link>
      </p>
      <p className="text-lg text-center mt-4">User: {user ? user.name : 'Desconocido'}</p>
    </div>
  );
};
export default Welcome;
