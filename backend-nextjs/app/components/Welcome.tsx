'use client';
import { useUser } from '@auth0/nextjs-auth0/client';
import { LoginButton } from './buttons/login-button';
import { LogoutButton } from './buttons/logout-button';
import { SignupButton } from './buttons/signup-button';
const Welcome = () => {
  const { user } = useUser();
  console.log('user', user);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-center">Bienvenido </h1>
      <div className="nav-bar__buttons">
        {!user && (
          <>
            <SignupButton />
            <br />
            <LoginButton />
          </>
        )}
        {user && <LogoutButton />}
      </div>
      <p className="text-lg text-center mt-4">User: {user ? user.name : 'Desconocido'}</p>
    </div>
  );
};
export default Welcome;
