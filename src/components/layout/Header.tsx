import React from "react";

export default function Header() {
  return (
    <div className="bg-[#0081B4] p-6 text-white">
      <h1 className="font-bold text-4xl m-auto text-center p-4 hover:underline">
        <a href="https://play.google.com/store/apps/details?id=com.shrey_businessx.android">
          BusinessX
        </a>
      </h1>
      <p className="font-semibold text-xl text-center">
        Daily sales, Profit & Inventory
      </p>
    </div>
  );
}
