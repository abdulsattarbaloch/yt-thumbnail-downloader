// app/page.tsx
import Marketing from "@/components/marketing";
import ThumbnailDownloader from "@/components/thumbnail-downloader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free YouTube Thumbnail Downloader - Download HD Thumbnails Instantly",
  description:
    "Download YouTube video thumbnails in HD quality for free. Support for all resolutions (1280x720, 640x480, 480x360). Fast, safe, and works with any YouTube URL.",
  keywords:
    "youtube thumbnail downloader, download youtube thumbnails, youtube thumbnail extractor, free thumbnail downloader, HD youtube thumbnails",
  authors: [{ name: "YouTube Thumbnail Downloader" }],
  robots: "index, follow",
  openGraph: {
    title: "Free YouTube Thumbnail Downloader - Download HD Thumbnails",
    description:
      "Download YouTube video thumbnails in multiple resolutions instantly. Free, fast, and secure thumbnail downloader tool.",
    type: "website",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "YouTube Thumbnail Downloader Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free YouTube Thumbnail Downloader",
    description:
      "Download YouTube thumbnails in HD quality instantly. Free and secure.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gray-50 py-8 md:p-12">
        <ThumbnailDownloader />
        <Marketing />
      </main>
    </>
  );
}
