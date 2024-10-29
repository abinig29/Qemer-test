"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { type FC, type ReactNode } from "react";
import { Toaster } from "./ui/toaster";

interface LayoutProps {
  children: ReactNode;
}

const queryClient = new QueryClient();


const Providers: FC<LayoutProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Toaster />
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
