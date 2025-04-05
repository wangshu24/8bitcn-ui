"use client";

import { usePathname } from "next/navigation";

import { SidebarMenuItem } from "./ui/sidebar";
import { SidebarMenuButton } from "./ui/sidebar";

type SidebarItemProps = {
  item: {
    title: string;
    url: string;
  };
};

export default function SidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.url;

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild isActive={isActive}>
        <a href={item.url}>{item.title}</a>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
