import React from "react";

const Members = () => {
  if (2 < 5) {
    throw new Error("Error happened");
  }

  return <div className="border p-[10rem] w-[30rem]">Members</div>;
};

export default Members;
