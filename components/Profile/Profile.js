import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
      user && (
          <div>
                <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <div className="avatar">
              <div className="w-8 mask mask-hexagon">
              <img src={user.picture} alt={user.name} />
              </div>
            </div>
          </button>
          </div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
      )
  );
}