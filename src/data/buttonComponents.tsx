
import { Button } from "@/components/ui/button";
import { Heart, Download, Mail, Trash2 } from "lucide-react";

export const buttonComponents = [
  {
    id: "primary-button",
    name: "Primary Button",
    description: "The main call-to-action button with emphasis styling.",
    code: `<Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
  Get Started
</Button>`,
    preview: (
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
        Get Started
      </Button>
    ),
  },
  {
    id: "secondary-button",
    name: "Secondary Button",
    description: "A subtle button for secondary actions.",
    code: `<Button variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2 rounded-lg font-medium transition-colors">
  Learn More
</Button>`,
    preview: (
      <Button variant="outline" className="border-2 border-slate-300 hover:bg-slate-50 text-slate-700 px-6 py-2 rounded-lg font-medium transition-colors">
        Learn More
      </Button>
    ),
  },
  {
    id: "icon-buttons",
    name: "Icon Buttons",
    description: "Buttons with icons for better visual communication.",
    code: `<div className="flex space-x-3">
  <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
    <Heart className="h-4 w-4" />
    <span>Like</span>
  </Button>
  <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
    <Download className="h-4 w-4" />
    <span>Download</span>
  </Button>
</div>`,
    preview: (
      <div className="flex space-x-3">
        <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Heart className="h-4 w-4" />
          <span>Like</span>
        </Button>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download</span>
        </Button>
      </div>
    ),
  },
  {
    id: "button-sizes",
    name: "Button Sizes",
    description: "Different button sizes for various use cases.",
    code: `<div className="flex items-center space-x-3">
  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
    Small
  </Button>
  <Button className="bg-purple-600 hover:bg-purple-700 text-white">
    Medium
  </Button>
  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
    Large
  </Button>
</div>`,
    preview: (
      <div className="flex items-center space-x-3">
        <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
          Small
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          Medium
        </Button>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
          Large
        </Button>
      </div>
    ),
  },
];
