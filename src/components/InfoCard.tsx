import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

interface InfoCardProps {
  title: string;
  subtitle?: string;
  items: string[];
  buttonText: string;
  onClick?: () => void;
}

export const InfoCard = ({ title, subtitle, items, buttonText, onClick }: InfoCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 border-2 border-accent shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
      {subtitle && <p className="text-muted-foreground text-sm mb-4">{subtitle}</p>}
      
      <ul className="space-y-2 mb-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
            <span className="text-primary font-bold">•</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        variant="card" 
        size="lg" 
        className="w-full"
        onClick={onClick}
      >
        <Download className="w-5 h-5" />
        {buttonText}
      </Button>
    </div>
  );
};
