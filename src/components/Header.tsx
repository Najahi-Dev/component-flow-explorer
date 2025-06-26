
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="border-b border-slate-200/80 bg-white/90 backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <SidebarTrigger className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
            <Menu className="h-5 w-5 text-slate-600" />
          </SidebarTrigger>
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Component Documentation</h1>
            <p className="text-sm text-slate-500">Explore and copy reusable UI components</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            v1.0.0
          </div>
        </div>
      </div>
    </header>
  );
}
