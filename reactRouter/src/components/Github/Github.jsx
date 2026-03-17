import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <h1>Github followers: {data?.followers}</h1>
      <img
        src={data?.avatar_url}
        alt="Git picture"
        width="300"
        className="mx-auto mt-4 rounded-full"
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await response.json();
  return data;
};