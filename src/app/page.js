"use client"
import { useState } from "react";
import UserInfo from "./components/UserInfo";

export default function Home() {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* <div className="grid h-screen -mt-24 place-items-center">
        <UserInfo />
      </div> */}
      <div className="flex p-4">
        <div className="w-3/4 p-6">
          <h2>Your Heading</h2>
          <p>
            {expanded
              ? "More information about the topic can be shown here."
              : "A brief description about the topic goes here."}
          </p>
          <button onClick={handleExpand}>
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
        <div className="w-1/4 p-6">
          <div
            style={{
              height: "100%",
              backgroundImage: `url('https://source.unsplash.com/random')`,
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}



