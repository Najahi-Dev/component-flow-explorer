
import { useState } from "react";
import { Copy, Check, Code, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ComponentPreviewProps {
  name: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

export function ComponentPreview({ name, description, code, preview }: ComponentPreviewProps) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <Card className="overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/70 backdrop-blur-sm">
      <CardHeader className="border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl text-slate-900">{name}</CardTitle>
            <p className="text-slate-600 mt-1">{description}</p>
          </div>
          <Button
            onClick={copyCode}
            variant="outline"
            size="sm"
            className="flex items-center space-x-2 hover:bg-slate-100 transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                <span className="text-emerald-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy Code</span>
              </>
            )}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b border-slate-200">
            <TabsList className="h-12 bg-transparent border-none rounded-none p-0">
              <TabsTrigger 
                value="preview" 
                className="flex items-center space-x-2 px-6 py-3 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent rounded-none"
              >
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </TabsTrigger>
              <TabsTrigger 
                value="code" 
                className="flex items-center space-x-2 px-6 py-3 border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent rounded-none"
              >
                <Code className="h-4 w-4" />
                <span>Code</span>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="preview" className="mt-0 border-none p-8">
            <div className="flex items-center justify-center min-h-[200px] bg-gradient-to-br from-slate-50 to-white rounded-lg border border-slate-100">
              {preview}
            </div>
          </TabsContent>

          <TabsContent value="code" className="mt-0 border-none p-0">
            <div className="relative">
              <pre className="bg-slate-900 text-slate-100 p-6 overflow-x-auto text-sm leading-relaxed">
                <code>{code}</code>
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
