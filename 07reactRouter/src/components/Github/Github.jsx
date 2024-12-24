import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // useLoaderData Hook for the route loader
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/hiteshchoudhary")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, [data]);
  return (
    <div className="flex justify-center m-4 text-center  bg-gray-600 text-white p-4  text-3xl">
      <div className=" text-3xl">
        Github Follower: {data.followers}
        <img
          className="justify-center mt-4"
          src={data.avatar_url}
          alt="Git Picture"
          width={300}
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/hiteshchoudhary");
  return response.json();
};
