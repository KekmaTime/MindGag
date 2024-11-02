import { BackButton } from "@/app/components/BackButton";
import { ThemeToggle } from "@/app/components/theme-toggle";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-background">
      <div className="fixed top-8 right-8">
        <ThemeToggle />
      </div>
      <BackButton />
      <div className="container max-w-3xl mx-auto px-4">
        {children}
      </div>
    </div>
  );
}