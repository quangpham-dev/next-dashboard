import { Metadata } from "next";
import { inter } from "@/fonts";
import "@/app/ui/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard"
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-dashboard-2025.vercel.app")
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
