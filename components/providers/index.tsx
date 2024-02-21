"use client";

import { ConvexClientProvider } from "./convex-client-provider";

interface IProps {
  children: React.ReactNode;
}

export function Providers({ children }: IProps) {
  return <ConvexClientProvider>{children}</ConvexClientProvider>;
}
