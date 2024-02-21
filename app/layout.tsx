import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "~/components/providers";

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Miro Clone",
  description: "This is a Miro Clone developed by Navin Avadhani.",
  icons: ["/logo.svg"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
