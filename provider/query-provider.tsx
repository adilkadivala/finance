"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
}

let browserClient: QueryClient | undefined = undefined;

// function getQueryClient() {
//   if (typeof window === "undefined") {
//     return makeQueryClient();
//   } else {
//     if (!browserQueryClient) browserQueryClient = makeQueryClient();
//     return browserQueryClient;
//   }
// }

function getQueryClient() {
  if (typeof window === "undefined") {
    return makeQueryClient();
  } else {
    if (!browserClient) browserClient = makeQueryClient();
    return browserClient;
  }
}

type Props = {
  children: React.ReactNode;
};

export function QueryProvider({ children }: Props) {
  const QueryClient = getQueryClient();

  return (
    <QueryClientProvider client={QueryClient}>{children}</QueryClientProvider>
  );
}
