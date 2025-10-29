import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

declare global {
  interface Window {
    Telegram?: {
      WebApp?: {
        initData?: string;
        initDataUnsafe?: any;
        ready(): void;
        expand(): void;
        close(): void;
        sendData(data: string): void;
        MainButton?: {
          text: string;
          color: string;
          textColor: string;
          isVisible: boolean;
          show(): void;
          hide(): void;
          enable(): void;
          disable(): void;
          setText(text: string): void;
          setParams(params: Partial<{ text: string; color: string; textColor: string; isVisible: boolean }>): void;
        };
        BackButton?: {
          onClick(callback: () => void): void;
          setVisibility(isVisible: boolean): void;
          setParams(params: { isVisible: boolean }): void;
        };
        colorScheme: "light" | "dark";
        themeParams?: any;
        setHeaderColor(color: string): void;
        setBackgroundColor(color: string): void;
        version: string;
        platform: string;
      };
    };
  }
}

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      window.Telegram.WebApp.setHeaderColor("#f59e0b"); // accent color
      window.Telegram.WebApp.setBackgroundColor("#ffffff");
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
