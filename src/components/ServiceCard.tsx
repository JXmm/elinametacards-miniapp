import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  buttonText: string;
  onClick?: () => void;
}

export const ServiceCard = ({ title, description, features, icon: Icon, buttonText, onClick }: ServiceCardProps) => {
  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-primary-foreground shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-[1.02]">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-primary-foreground/10 p-3 rounded-xl">
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-primary-foreground/90 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-primary-foreground/95">
            <span className="text-primary-foreground/60">•</span>
            <span className="flex-1">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant="outline" 
        size="lg" 
        className="w-full bg-card text-primary border-card hover:bg-card/90"
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};
