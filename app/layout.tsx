import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/provider/query-provider";
import { SheetProvider } from "@/provider/sheet-provider";
import { Toaster } from "@/components/ui/sonner";
import { Suspense } from "react";

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
            <Suspense fallback={<p>Loading...</p>}>{children}</Suspense>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
