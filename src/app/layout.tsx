import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./main.css";

// Font
const inter = Montserrat({ subsets: ["latin"] });

// Page Metadata
export const metadata: Metadata = {
  title: "Public Font Curation - Explore free Fonts",
  description: "The Public Font Curation collects high-quality free fonts from around the web for easy use by designers and developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
    </html>
  );
}