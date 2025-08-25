import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const metadataBase = new URL("https://fmcshops.com");

  return {
    title: "Gold Tiger Logistics Solutions",
    description: "SMARTER SUPPLY CHAIN MANAGEMENT",
    applicationName: "GTLS",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Gtls" }],
    metadataBase: metadataBase,
    icons: {
      icon: [`/favicon.ico`],
      apple: ["/apple-touch-icon.png"],
      shorcut: ["/apple-touch-icon.png"],
    },
    manifest: "/site.webmanifest",
    background_color: "#fff",
    theme_color: "#ffffff",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
