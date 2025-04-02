"use client";

import { SidebarMenuItem } from "./ui/sidebar";

import React from "react";
import { SidebarMenuButton } from "./ui/sidebar";
import { usePathname } from "next/navigation";

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
