import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/components/theme-provider";
import { Toaster } from "@/app/components/ui/toaster";
import { montserrat } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Zacherina's",
  description: "Zacherina is a software engineer who breaks software for fun",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
