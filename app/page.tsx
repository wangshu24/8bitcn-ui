import Button from "@/components/ui/8bit/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col p-4 md:p-24 gap-5">
      <h1 className="text-4xl font-bold">Build your retro component library</h1>
      <p className="max-w-2xl">
        A set of 8-bit styled components and a code distribution platform. Works
        with your favorite frameworks. Open Source. Open Code.
      </p>
      <Link href="/components/button">
        <Button className="w-fit">Get Started</Button>
      </Link>
    </div>
  );
}
