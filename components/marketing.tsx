// components/Marketing.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Download, Image, Zap, Shield, Smartphone, Globe } from "lucide-react";
import Article from "./article";

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

      {/* SEO Text Block */}
      <Article />
    </section>
  );
}
