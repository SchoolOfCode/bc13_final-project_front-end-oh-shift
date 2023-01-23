import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <>
        {" "}
        <img src={user.picture} alt={user.name} />
      </>
    )
  );
}
