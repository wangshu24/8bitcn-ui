import Button from "@/components/ui/8bit/button";
import { OpenInV0Button } from "../open-in-v0-button";

export default function ButtonPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">Button</h1>

      <p className="text-muted-foreground">
        Displays a button or a component that looks like a 8-bit button.
      </p>

      <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
        <div className="flex items-center justify-between">
          <h2 className="text-sm text-muted-foreground sm:pl-3">
            A simple 8-bit button component
          </h2>
          <OpenInV0Button name="8bit-button" className="w-fit" />
        </div>
        <div className="flex items-center justify-center min-h-[400px] relative">
          <Button>Button</Button>
        </div>
      </div>
    </div>
  );
}
