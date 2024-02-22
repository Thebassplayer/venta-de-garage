import React from "react";
import Title from "./Title";

const Loading = () => {
  return (
    <main className="h-screen w-screen">
      <div className="flex h-full w-full flex-col items-center justify-center gap-3">
        <Title className="animate-pulse" />
        <p>Loading...</p>
      </div>
    </main>
  );
};

export default Loading;
