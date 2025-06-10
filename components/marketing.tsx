// components/Marketing.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Download, Image, Zap, Shield, Smartphone, Globe } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Marketing() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Download YouTube Thumbnails in
          <span className="text-blue-600"> High Quality</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Get YouTube video thumbnails instantly in multiple resolutions. Fast,
          free, and works with any YouTube video URL.
        </p>
      </div>

      {/* Features Grid */}
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Why Choose Our YouTube Thumbnail Downloader?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Feature
              icon={<Download className="w-4 h-4" />}
              title="Multiple Resolutions"
              description="Download thumbnails in various sizes: 1280x720 (HD), 640x480 (SD), 480x360 (HQ), 320x180 (MQ), and 120x90 (Default)"
            />
            <Feature
              icon={<Zap className="w-4 h-4" />}
              title="Lightning Fast"
              description="Instant thumbnail extraction and download. No waiting, no processing delays - get your thumbnails immediately"
            />
            <Feature
              icon={<Shield className="w-4 h-4" />}
              title="100% Free & Safe"
              description="No registration required, no hidden fees, no malware. Your privacy is protected - we don't store any data"
            />
            <Feature
              icon={<Globe className="w-4 h-4" />}
              title="Works with Any URL"
              description="Support for all YouTube URL formats: youtube.com/watch, youtu.be, youtube.com/embed, and direct video IDs"
            />
            <Feature
              icon={<Smartphone className="w-4 h-4" />}
              title="Mobile Friendly"
              description="Optimized for all devices - download YouTube thumbnails on desktop, tablet, or mobile phone"
            />
            <Feature
              icon={<Image className="w-4 h-4" />}
              title="Original Quality"
              description="Get thumbnails in their original quality directly from YouTube servers - no compression or watermarks"
            />
          </div>
        </CardContent>
      </Card>

      {/* How it Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          How to Download YouTube Thumbnails
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <h3 className="font-semibold text-gray-900">Paste YouTube URL</h3>
            <p className="text-gray-600 text-sm">
              Copy and paste any YouTube video URL into the search box above
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-blue-600 font-bold text-lg">2</span>
            </div>
            <h3 className="font-semibold text-gray-900">Choose Resolution</h3>
            <p className="text-gray-600 text-sm">
              Select from available thumbnail resolutions and preview them
            </p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <span className="text-blue-600 font-bold text-lg">3</span>
            </div>
            <h3 className="font-semibold text-gray-900">Download Instantly</h3>
            <p className="text-gray-600 text-sm">
              Click download and get your YouTube thumbnail saved to your device
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What YouTube URL formats are supported?
              </h3>
              <p className="text-gray-600 text-sm">
                Our tool supports all YouTube URL formats including
                youtube.com/watch?v=, youtu.be/, youtube.com/embed/, and direct
                11-character video IDs. Simply paste any YouTube link and
                we&apos;ll extract the thumbnail.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                What thumbnail resolutions can I download?
              </h3>
              <p className="text-gray-600 text-sm">
                You can download YouTube thumbnails in multiple resolutions:
                Maximum Resolution (1280x720), Standard Definition (640x480),
                High Quality (480x360), Medium Quality (320x180), and Default
                (120x90). Not all videos have all resolutions available.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Is it legal to download YouTube thumbnails?
              </h3>
              <p className="text-gray-600 text-sm">
                YouTube thumbnails are publicly accessible images. However,
                always respect copyright and use thumbnails appropriately. For
                commercial use, consider contacting the video creator for
                permission.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Do you store my YouTube URLs or downloaded thumbnails?
              </h3>
              <p className="text-gray-600 text-sm">
                No, we don&apos;t store any data. All processing happens in your
                browser, and we never save YouTube URLs, thumbnails, or any
                personal information. Your privacy is completely protected.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SEO Text Block */}
      <div className="prose max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Best YouTube Thumbnail Downloader Tool 2025
        </h2>
        <p className="text-gray-600 mb-4">
          Looking for a reliable way to download YouTube thumbnails? Our free
          YouTube thumbnail downloader is the perfect solution for content
          creators, marketers, and designers who need high-quality thumbnail
          images. Whether you&apos;re creating video compilations, designing
          social media posts, or analyzing competitor content, our tool provides
          instant access to YouTube thumbnails in multiple resolutions.
        </p>
        <p className="text-gray-600 mb-4">
          Unlike other thumbnail downloaders that require software installation
          or registration, our web-based tool works directly in your browser.
          Simply paste any YouTube URL and instantly access thumbnails in
          resolutions ranging from 120x90 pixels to full HD 1280x720 pixels. The
          tool automatically detects available thumbnail sizes and lets you
          download the perfect resolution for your needs.
        </p>
        <p className="text-gray-600">
          Our YouTube thumbnail extractor supports all video types and URL
          formats, making it the most versatile thumbnail downloading solution
          available. Save time and effort with our fast, secure, and completely
          free YouTube thumbnail downloader tool.
        </p>
      </div>
    </section>
  );
}
