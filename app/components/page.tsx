import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <div className="relative flex gap-4 max-w-[1400px] mx-auto p-4 border-l border-r border-dashed">
      <SidebarProvider className="w-max">
        <AppSidebar className="absolute top-0 left-0 " />
        <SidebarTrigger className="md:hidden" />
      </SidebarProvider>

      <div>
        <h1 className="text-2xl font-bold">Components</h1>
        <p>Coming soon...</p>
      </div>
    </div>
  );
}
