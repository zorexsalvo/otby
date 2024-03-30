"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

export default function NavBar() {
  const scrolled = useScroll(50);

  const changeTheme = () => {
    const root = document.getElementById("root");
    if (root) {
      root.classList.add("bg-black");
    }
  };

  return (
    <>
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="OTC logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
          </Link>
            <button onClick={changeTheme}>
              <Image
                src="/icons/dark.svg"
                alt="Dark mode"
                width="20"
                height="20"
                className="mr-2 rounded-sm"
              ></Image>
            </button>
        </div>
      </div>
    </>
  );
}
