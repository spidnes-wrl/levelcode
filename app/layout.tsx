import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LevelCode",
  description: "Official LevelCode source project and modular AI ecosystem foundation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
