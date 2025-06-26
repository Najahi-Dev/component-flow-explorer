import { useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Header } from "@/components/Header";
import { ComponentPreview } from "@/components/ComponentPreview";
import { ComponentSection } from "@/components/ComponentSection";
import { buttonComponents } from "@/data/buttonComponents";
import { cardComponents } from "@/data/cardComponents";
import { modalComponents } from "@/data/modalComponents";
import { chartComponents } from "@/data/chartComponents";
import { navigationComponents } from "@/data/navigationComponents";

const Index = () => {
  const [activeSection, setActiveSection] = useState("buttons");

  const renderContent = () => {
    switch (activeSection) {
      case "buttons":
        return (
          <ComponentSection
            title="Buttons"
            description="A collection of button components with different variants, sizes, and states."
            components={buttonComponents}
          />
        );
      case "cards":
        return (
          <ComponentSection
            title="Cards"
            description="Flexible card components for displaying content in a contained format."
            components={cardComponents}
          />
        );
      case "modals":
        return (
          <ComponentSection
            title="Modals"
            description="Modal dialogs and overlays for displaying important information."
            components={modalComponents}
          />
        );
      case "charts":
        return (
          <ComponentSection
            title="Charts"
            description="Interactive data visualization components built with Recharts for displaying analytics and metrics."
            components={chartComponents}
          />
        );
      case "navigation":
        return (
          <ComponentSection
            title="Navigation"
            description="Navigation components including navigation bars, sidebars, and top bars with smooth animations."
            components={navigationComponents}
          />
        );
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-muted-foreground">Select a component category from the sidebar</p>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-slate-50 to-slate-100">
        <AppSidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        
        <div className="flex-1 flex flex-col">
          <Header />
          
          <main className="flex-1 p-8">
            <div className="max-w-6xl mx-auto">
              {renderContent()}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
