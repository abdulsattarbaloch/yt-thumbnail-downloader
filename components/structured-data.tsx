// components/StructuredData.tsx
export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "YouTube Thumbnail Downloader",
    description:
      "Free online tool to download YouTube video thumbnails in multiple resolutions including HD quality",
    url: "https://your-domain.com",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Download YouTube thumbnails in HD quality",
      "Multiple resolution support (1280x720, 640x480, 480x360, 320x180, 120x90)",
      "Works with all YouTube URL formats",
      "No registration required",
      "Mobile-friendly interface",
      "Instant download",
    ],
    screenshot: "https://your-domain.com/screenshot.jpg",
    softwareVersion: "1.0",
    datePublished: "2025-01-01",
    author: {
      "@type": "Organization",
      name: "YouTube Thumbnail Downloader",
    },
    provider: {
      "@type": "Organization",
      name: "YouTube Thumbnail Downloader",
    },
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What YouTube URL formats are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our tool supports all YouTube URL formats including youtube.com/watch?v=, youtu.be/, youtube.com/embed/, and direct 11-character video IDs.",
        },
      },
      {
        "@type": "Question",
        name: "What thumbnail resolutions can I download?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can download YouTube thumbnails in multiple resolutions: Maximum Resolution (1280x720), Standard Definition (640x480), High Quality (480x360), Medium Quality (320x180), and Default (120x90).",
        },
      },
      {
        "@type": "Question",
        name: "Is it free to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our YouTube thumbnail downloader is completely free to use. No registration, no hidden fees, no limitations.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
