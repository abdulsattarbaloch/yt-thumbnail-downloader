// components/ThumbnailDownloader.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Search, AlertCircle } from "lucide-react";
import {
  extractVideoId,
  getThumbnailUrls,
  checkThumbnailExists,
  downloadThumbnail,
  type ThumbnailCollection,
  type ThumbnailData,
  type ThumbnailQuality,
  type QualityInfo,
} from "@/lib/youtube";

export default function ThumbnailDownloader() {
  const [url, setUrl] = useState<string>("");
  const [thumbnails, setThumbnails] = useState<ThumbnailCollection | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleFetch = async (): Promise<void> => {
    if (!url.trim()) {
      setError("Please enter a YouTube URL");
      return;
    }

    setLoading(true);
    setError("");
    setThumbnails(null);

    try {
      const videoId = extractVideoId(url);

      if (!videoId) {
        setError(
          "Invalid YouTube URL. Please enter a valid YouTube video URL."
        );
        setLoading(false);
        return;
      }

      const thumbnailUrls = getThumbnailUrls(videoId);

      // Check which thumbnails exist
      const availableThumbnails: ThumbnailData[] = [];

      for (const [quality, thumbnailUrl] of Object.entries(thumbnailUrls)) {
        const exists = await checkThumbnailExists(thumbnailUrl);
        if (exists) {
          availableThumbnails.push({
            quality: quality as ThumbnailQuality,
            url: thumbnailUrl,
            size: getQualityInfo(quality as ThumbnailQuality),
          });
        }
      }

      if (availableThumbnails.length === 0) {
        setError("No thumbnails found for this video.");
      } else {
        setThumbnails({ videoId, thumbnails: availableThumbnails });
      }
    } catch (err) {
      console.log(err);
      setError("Failed to fetch thumbnails. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getQualityInfo = (quality: ThumbnailQuality): QualityInfo => {
    const info: Record<ThumbnailQuality, QualityInfo> = {
      maxres: { label: "Max Resolution", size: "1280x720" },
      standard: { label: "Standard", size: "640x480" },
      high: { label: "High Quality", size: "480x360" },
      medium: { label: "Medium Quality", size: "320x180" },
      default: { label: "Default", size: "120x90" },
    };
    return info[quality];
  };

  const handleDownload = (thumbnail: ThumbnailData): void => {
    if (!thumbnails) return;
    const filename = `youtube-thumbnail-${thumbnails.videoId}-${thumbnail.quality}.jpg`;
    downloadThumbnail(thumbnail.url, filename);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleFetch();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            YouTube Thumbnail Downloader
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="text"
              placeholder="Enter YouTube URL (e.g., https://youtu.be/dQw4w9WgXcQ)"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1"
            />
            <Button onClick={handleFetch} disabled={loading} size={"lg"}>
              {loading ? (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-gray-900" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              Get Thumbnail
            </Button>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {thumbnails && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Available Thumbnails</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {thumbnails.thumbnails.map((thumbnail) => (
                  <Card key={thumbnail.quality} className="overflow-hidden">
                    <div className="aspect-video bg-gray-100">
                      <img
                        src={thumbnail.url}
                        alt={`${thumbnail.size.label} thumbnail`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <p className="font-medium">{thumbnail.size.label}</p>
                          <p className="text-sm text-gray-600">
                            {thumbnail.size.size}
                          </p>
                        </div>
                        <Button
                          size="sm"
                          onClick={() => handleDownload(thumbnail)}
                          className="shrink-0"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
