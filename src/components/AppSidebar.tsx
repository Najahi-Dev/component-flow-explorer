import { Package2, Square, CreditCard, MessageSquare, BarChart3 } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

interface AppSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const navigationItems = [
  { id: "buttons", title: "Buttons", icon: Square },
  { id: "cards", title: "Cards", icon: CreditCard },
  { id: "modals", title: "Modals", icon: MessageSquare },
  { id: "charts", title: "Charts", icon: BarChart3 },
];

export function AppSidebar({ activeSection, onSectionChange }: AppSidebarProps) {
  return (
    <Sidebar className="border-r border-slate-200/80 bg-white/80 backdrop-blur-sm">
      <SidebarHeader className="border-b border-slate-200/50 p-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
            <Package2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-slate-900">UI System</h2>
            <p className="text-sm text-slate-500">Component Library</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-slate-600 uppercase tracking-wider mb-3">
            Components
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full justify-start px-3 py-2 rounded-lg transition-all duration-200 hover:bg-slate-100 ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-700 border border-blue-200 shadow-sm"
                        : "text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <item.icon className={`mr-3 h-4 w-4 ${
                      activeSection === item.id ? "text-blue-600" : "text-slate-500"
                    }`} />
                    <span className="font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
