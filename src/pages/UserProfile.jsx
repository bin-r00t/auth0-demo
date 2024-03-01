import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import reactSVG from "../assets/react.svg";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p className="m-5 text-gray-600 text-sm">Loading...</p>;
  }
  return isAuthenticated ? (
    <div className="user-profile m-5 p-5 w-96 flex flex-col items-center gap-5 card bg-white rounded-xl shadow-lg">
      <img
        src={reactSVG}
        alt="Profile"
        className="bg-white p-3 shadow-lg rounded-full w-20 h-20"
      />
      <section className="text-area font-sans divide-y">
        <h2 className="text-xl py-2">{user.name}</h2>
        <p className="text-gray-600 text-sm py-2">{user.email}</p>
      </section>
    </div>
  ) : (
    <p className="m-5 text-gray-600 text-sm">- 未登录 -</p>
  );
}

export default UserProfile;
