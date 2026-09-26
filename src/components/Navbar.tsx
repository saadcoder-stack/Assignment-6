"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const Navbar = () => {
  const pathname = usePathname();

  const { plan, saved } = useFitLog();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#202228] bg-[#0b0c0e]">
      <div className="mx-auto flex h-[61px] max-w-[1200px] items-center justify-between px-5">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl text-[#baff00]">⚒</span>

          <span className="text-[16px] font-extrabold tracking-wide text-white">
            FITLOG
          </span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/"
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              pathname === "/"
                ? "bg-[#18220a] text-[#baff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
              pathname === "/my-plan"
                ? "bg-[#18220a] text-[#baff00]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-5 text-xs">

          {/* Plan Counter */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            <span>Plan</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#baff00] px-1 text-[10px] font-bold text-black">
              {plan.length}
            </span>
          </Link>

          {/* Saved Counter */}
          <Link
            href="/my-plan"
            className="flex items-center gap-2 text-gray-400 transition hover:text-white"
          >
            <span>Saved</span>

            <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full border border-[#30343b] px-1 text-[10px] text-gray-300">
              {saved.length}
            </span>
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;