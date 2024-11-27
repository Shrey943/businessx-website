import React from "react";

export default function Footer() {
  return (
    <div className="flex p-6 text-2xl bg-[#0081B4] text-white justify-between">
        <a
          className="hover:underline w-[10%] ml-4"
          href="https://businessx-0.flycricket.io/privacy.html"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          Privacy Policy
        </a>
    <div className="font-semibold text-center">
      By - Shrey Jain
    </div>
    <a href="mailto:businessxteam@gmail.com " className="mr-4 hover:underline">
        Contact us
    </a>
    </div>
  );
}
