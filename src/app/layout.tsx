import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ArusMedia",
    template: "%s | ArusMedia"
  },
  description: "Informasi aktual dan perspektif dari Indonesia dan dunia."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
