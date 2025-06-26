
import React from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Menu, Home, User, Settings, Bell, Search } from 'lucide-react';

export const navigationComponents = [
  {
    id: 'horizontal-nav',
    title: 'Horizontal Navigation',
    description: 'Main navigation menu with dropdown support',
    component: (
      <NavigationMenu className="animate-fade-in">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[400px]">
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent transition-colors">
                  <div className="text-sm font-medium">Introduction</div>
                  <p className="text-sm text-muted-foreground">Get started with our platform</p>
                </NavigationMenuLink>
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent transition-colors">
                  <div className="text-sm font-medium">Installation</div>
                  <p className="text-sm text-muted-foreground">How to install and setup</p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-6 w-[500px]">
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent transition-colors">
                  <div className="text-sm font-medium">Alert Dialog</div>
                  <p className="text-sm text-muted-foreground">Modal dialogs for important actions</p>
                </NavigationMenuLink>
                <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent transition-colors">
                  <div className="text-sm font-medium">Button</div>
                  <p className="text-sm text-muted-foreground">Interactive button components</p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className="px-4 py-2 text-sm font-medium hover:text-accent-foreground">
              Documentation
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
    code: `<NavigationMenu className="animate-fade-in">
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className="grid gap-3 p-6 w-[400px]">
          <NavigationMenuLink className="block p-3 rounded-md hover:bg-accent transition-colors">
            <div className="text-sm font-medium">Introduction</div>
            <p className="text-sm text-muted-foreground">Get started with our platform</p>
          </NavigationMenuLink>
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
  },
  {
    id: 'sidebar-nav',
    title: 'Sidebar Navigation',
    description: 'Collapsible sidebar with menu items',
    component: (
      <div className="w-full h-96 border rounded-lg overflow-hidden">
        <SidebarProvider>
          <div className="flex h-full">
            <Sidebar className="animate-slide-in-right">
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Application</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Home className="h-4 w-4" />
                          <span>Home</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <User className="h-4 w-4" />
                          <span>Profile</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton>
                          <Settings className="h-4 w-4" />
                          <span>Settings</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <main className="flex-1 p-4 bg-muted/30">
              <div className="flex items-center space-x-2 mb-4">
                <SidebarTrigger />
                <h2 className="text-lg font-semibold">Main Content</h2>
              </div>
              <p className="text-muted-foreground">Click the menu button to toggle sidebar</p>
            </main>
          </div>
        </SidebarProvider>
      </div>
    ),
    code: `<SidebarProvider>
  <div className="flex h-full">
    <Sidebar className="animate-slide-in-right">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    <main className="flex-1 p-4">
      <SidebarTrigger />
      <h2>Main Content</h2>
    </main>
  </div>
</SidebarProvider>`,
  },
  {
    id: 'top-bar',
    title: 'Top Navigation Bar',
    description: 'Header navigation with actions and branding',
    component: (
      <div className="w-full border rounded-lg overflow-hidden animate-fade-in">
        <header className="bg-background border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">L</span>
                </div>
                <span className="font-semibold text-lg">Brand</span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                  Dashboard
                </a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                  Projects
                </a>
                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                  Team
                </a>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
              <Button size="sm">Sign In</Button>
            </div>
          </div>
        </header>
        <div className="p-6 bg-muted/30">
          <p className="text-muted-foreground text-sm">Content area below the top bar</p>
        </div>
      </div>
    ),
    code: `<header className="bg-background border-b px-6 py-4 animate-fade-in">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">L</span>
        </div>
        <span className="font-semibold text-lg">Brand</span>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
          Dashboard
        </a>
        <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
          Projects
        </a>
      </nav>
    </div>
    
    <div className="flex items-center space-x-4">
      <Button variant="ghost" size="sm">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="sm">
        <Bell className="h-4 w-4" />
      </Button>
      <Button size="sm">Sign In</Button>
    </div>
  </div>
</header>`,
  },
  {
    id: 'animated-nav',
    title: 'Animated Navigation',
    description: 'Navigation with smooth animations and transitions',
    component: (
      <div className="w-full border rounded-lg overflow-hidden">
        <nav className="bg-background border-b px-6 py-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-lg font-bold animate-scale-in">NavBar</div>
              <div className="hidden md:flex items-center space-x-6">
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <a
                    key={item}
                    href="#"
                    className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
            <Button 
              variant="default" 
              size="sm" 
              className="animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
            >
              Get Started
            </Button>
          </div>
        </nav>
        <div className="p-6 bg-muted/30">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item, index) => (
              <div
                key={item}
                className="p-4 bg-background rounded-lg border animate-fade-in hover:shadow-lg transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="w-8 h-8 bg-primary/10 rounded-md mb-2"></div>
                <h3 className="font-medium text-sm">Feature {item}</h3>
                <p className="text-xs text-muted-foreground">Animated card content</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    code: `<nav className="bg-background border-b px-6 py-4 animate-fade-in">
  <div className="flex items-center justify-between">
    <div className="flex items-center space-x-8">
      <div className="text-lg font-bold animate-scale-in">NavBar</div>
      <div className="hidden md:flex items-center space-x-6">
        {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
          <a
            key={item}
            href="#"
            className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 group"
            style={{ animationDelay: \`\${index * 100}ms\` }}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>
    </div>
    <Button 
      variant="default" 
      size="sm" 
      className="animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
    >
      Get Started
    </Button>
  </div>
</nav>`,
  },
];
