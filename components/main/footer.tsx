import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Jake Snow {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
