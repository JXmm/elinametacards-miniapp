import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ContactCardProps {
  platform: string;
  title: string;
  description: string;
  buttonText: string;
  url?: string;
  onClick?: () => void;
}

export const ContactCard = ({ platform, title, description, buttonText, url, onClick }: ContactCardProps) => {
  const handleClick = onClick || (() => window.open(url, '_blank'));

  return (
    <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-primary-foreground shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      <p className="text-xs font-medium text-primary-foreground/70 mb-2 uppercase tracking-wide">{platform}</p>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-primary-foreground/90 mb-6 leading-relaxed">{description}</p>

      <Button
        variant="outline"
        size="lg"
        className="w-full bg-card text-primary border-card hover:bg-card/90"
        onClick={handleClick}
      >
        <ExternalLink className="w-5 h-5" />
        {buttonText}
      </Button>
    </div>
  );
};
