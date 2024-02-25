"use client";

import { UserButton } from "@clerk/nextjs";

interface IProps {}

export function Navbar({}: IProps) {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        {/* TODO: Add search */}Search
      </div>
      <UserButton />
    </div>
  );
}
