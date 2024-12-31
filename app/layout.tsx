import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/provider/query-provider";
import { SheetProvider } from "@/provider/sheet-provider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { FallBack } from "@/components/fall-back";

export const metadata: Metadata = {
  title: "Finance",
  description: "Finance tracking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <QueryProvider>
            <SheetProvider />
            <Toaster />
            <Suspense fallback={<FallBack />}>
              {children}
              <SpeedInsights />
            </Suspense>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
