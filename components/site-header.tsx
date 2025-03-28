import Image from "next/image";
import Link from "next/link";

import { pressStart } from "@/config/fonts";

import { ModeToggle } from "@/components/mode-toggle";

const navItems = [
  {
    label: "Components",
    href: "/components/button",
  },
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "About",
    href: "/about",
  },
];

export function SiteHeader() {
  return (
    <header className="flex sticky top-0 z-50 h-14 shrink-0 items-center gap-2 border-b border-dashed bg-background/95">
      <div className="flex w-full items-center h-full gap-1 px-4 lg:gap-5 lg:px-6 max-w-[1400px] mx-auto border-dashed border-l border-r">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/8bitcn.png" alt="logo" width={32} height={32} />{" "}
          <h2
            className={`${pressStart.className} hidden font-bold lg:inline-block text-xs`}
          >
            8bitcn/ui
          </h2>
        </Link>

        <nav className="hidden lg:flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className="text-sm font-extralight"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
