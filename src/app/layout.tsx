import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { StyledComponentsRegistry } from "@/lib/styled-components";

export const metadata: Metadata = {
  title: "Char Dham Yatra Packages 2026 | Kedarnath, Badrinath Tours | Yugen India Travel",
  description:
    "Book Char Dham Yatra packages with Yugen India Travel. Affordable Kedarnath, Badrinath, Gangotri and Yamunotri tours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
