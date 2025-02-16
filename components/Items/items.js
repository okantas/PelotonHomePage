import React from "react";
import Bike from "./bike";
import Others from "./others";

export default function items() {
  return (
    <>
      <div className="flex flex-col gap-40 bg-[#F5F7F9] py-28 ">
        <Bike />
        <Others />
      </div>
    </>
  );
}
