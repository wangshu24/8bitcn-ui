import Image from "next/image";

import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

const navItems = [
  {
    label: "Components",
    href: "/components",
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
    <header className="flex h-14 shrink-0 items-center gap-2 border-b border-dashed">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-5 lg:px-6 max-w-[1400px] mx-auto border-dashed border-l border-r">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/8bitcn.png" alt="logo" width={32} height={32} />{" "}
          <p className="hidden font-bold lg:inline-block">8bitcn/ui</p>
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
