import Link from "next/link";
import { Press_Start_2P } from "next/font/google";

import Button from "@/components/ui/8bit/button";

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col p-4 gap-5 pt-10">
      <h1 className={`${pressStart.className} text-2xl font-bold`}>
        Build your retro component library
      </h1>
      <p className="max-w-2xl">
        A set of 8-bit styled components and a code distribution platform. Works
        with your favorite frameworks. Open Source. Open Code.
      </p>
      <Link href="/components/button" className="w-fit">
        <Button size="sm" className="w-fit">
          Get Started
        </Button>
      </Link>
    </div>
  );
}
