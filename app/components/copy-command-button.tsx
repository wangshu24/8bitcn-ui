"use client";

import { Terminal } from "lucide-react";

import { Button } from "@/components/ui/button";

interface CopyCommandButtonProps {
  command: string;
  copyCommand: string;
}

export default function CopyCommandButton({
  command,
  copyCommand,
}: CopyCommandButtonProps) {
  const copy = () => {
    navigator.clipboard.writeText(copyCommand);
  };

  return (
    <Button variant="outline" onClick={copy}>
      <Terminal className="size-4" /> {command}
    </Button>
  );
}
