
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const cardComponents = [
  {
    id: "basic-card",
    name: "Basic Card",
    description: "A simple card with header, content, and actions.",
    code: `<Card className="w-80 shadow-lg border border-slate-200">
  <CardHeader>
    <CardTitle className="text-xl text-slate-900">Project Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-slate-600 mb-4">
      This is a basic card component that can be used to display information in a contained format.
    </p>
    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
      View Details
    </Button>
  </CardContent>
</Card>`,
    preview: (
      <Card className="w-80 shadow-lg border border-slate-200">
        <CardHeader>
          <CardTitle className="text-xl text-slate-900">Project Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4">
            This is a basic card component that can be used to display information in a contained format.
          </p>
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            View Details
          </Button>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "profile-card",
    name: "Profile Card",
    description: "A card designed for displaying user profiles.",
    code: `<Card className="w-80 shadow-lg border border-slate-200">
  <CardContent className="pt-6">
    <div className="flex flex-col items-center text-center">
      <Avatar className="w-20 h-20 mb-4">
        <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
        <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
          JD
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold text-slate-900 mb-1">John Doe</h3>
      <p className="text-slate-600 mb-3">Frontend Developer</p>
      <Badge className="bg-emerald-100 text-emerald-700 mb-4">
        Available
      </Badge>
      <div className="flex space-x-2 w-full">
        <Button variant="outline" className="flex-1">Message</Button>
        <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Follow</Button>
      </div>
    </div>
  </CardContent>
</Card>`,
    preview: (
      <Card className="w-80 shadow-lg border border-slate-200">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20 mb-4">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback className="bg-blue-100 text-blue-600 text-lg font-semibold">
                JD
              </AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold text-slate-900 mb-1">John Doe</h3>
            <p className="text-slate-600 mb-3">Frontend Developer</p>
            <Badge className="bg-emerald-100 text-emerald-700 mb-4">
              Available
            </Badge>
            <div className="flex space-x-2 w-full">
              <Button variant="outline" className="flex-1">Message</Button>
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Follow</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    ),
  },
  {
    id: "feature-card",
    name: "Feature Card",
    description: "A card highlighting key features or services.",
    code: `<Card className="w-80 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
  <CardContent className="p-6">
    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
      <span className="text-white text-xl font-bold">✨</span>
    </div>
    <h3 className="text-xl font-semibold text-slate-900 mb-2">Premium Feature</h3>
    <p className="text-slate-600 mb-4">
      Unlock advanced capabilities with our premium tier. Get access to exclusive tools and priority support.
    </p>
    <div className="flex items-center justify-between">
      <span className="text-2xl font-bold text-slate-900">$29<span className="text-sm text-slate-500">/mo</span></span>
      <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
        Upgrade
      </Button>
    </div>
  </CardContent>
</Card>`,
    preview: (
      <Card className="w-80 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
            <span className="text-white text-xl font-bold">✨</span>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Premium Feature</h3>
          <p className="text-slate-600 mb-4">
            Unlock advanced capabilities with our premium tier. Get access to exclusive tools and priority support.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-slate-900">$29<span className="text-sm text-slate-500">/mo</span></span>
            <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Upgrade
            </Button>
          </div>
        </CardContent>
      </Card>
    ),
  },
];
