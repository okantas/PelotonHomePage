import React from "react";
import Image from "next/image";
import TryTheApp from "@/public/TryTheApp.svg";

export default function TryApp() {
  return (
    <>
      <div>
        <div>
          <div>
            <p>Peloton App</p>
            <p>Try free for 30 days</p>
            <p>
              Take classes at home, in the gym, or on the go with no equipment
              needed.
            </p>
            <a>TRY THE APP</a>
            <p>New App trials only. $12.99/mo after. Terms apply.</p>
          </div>
          <Image src={TryTheApp} alt="image" />
        </div>
      </div>
    </>
  );
}
