
import { ComponentPreview } from "./ComponentPreview";

interface Component {
  id: string;
  name: string;
  description: string;
  code: string;
  preview: React.ReactNode;
}

interface ComponentSectionProps {
  title: string;
  description: string;
  components: Component[];
}

export function ComponentSection({ title, description, components }: ComponentSectionProps) {
  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="grid gap-8">
        {components.map((component) => (
          <ComponentPreview
            key={component.id}
            name={component.name}
            description={component.description}
            code={component.code}
            preview={component.preview}
          />
        ))}
      </div>
    </div>
  );
}
