import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs - YouTube Thumbnail Downloader",
  description:
    "You got questions, we got answers! If you have any confusions, please go through these faqs or contact us for further assitance.",
};

export default function AboutPage() {
  return (
    <div className="w-full max-w-4xl mx-auto py-8 md:py-12 px-4">
      <Card>
        <CardContent className="p-8">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b pb-4">
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
            <div className="border-b pb-4">
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
            <div className="border-b pb-4">
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
            <div className=" pb-4">
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
    </div>
  );
}
