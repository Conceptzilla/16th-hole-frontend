import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "16th Hole — Private Members Club",
  description:
    "A private golf society built around belonging, play and time well spent.",
  openGraph: {
    title: "16th Hole — Private Members Club",
    description:
      "A private golf society built around belonging, play and time well spent.",
    images: [
      {
        alt: "16th Hole private golf society",
        height: 3000,
        url: "/assets/16th-hole/rituals-dawn.jpg",
        width: 4000,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "16th Hole — Private Members Club",
    description:
      "A private golf society built around belonging, play and time well spent.",
    images: ["/assets/16th-hole/rituals-dawn.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
