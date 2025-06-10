// utils/youtube.ts

export type ThumbnailQuality =
  | "maxres"
  | "standard"
  | "high"
  | "medium"
  | "default";

export interface ThumbnailUrls {
  maxres: string;
  standard: string;
  high: string;
  medium: string;
  default: string;
}

export interface QualityInfo {
  label: string;
  size: string;
}

export interface ThumbnailData {
  quality: ThumbnailQuality;
  url: string;
  size: QualityInfo;
}

export interface ThumbnailCollection {
  videoId: string;
  thumbnails: ThumbnailData[];
}

// Extract video ID from various YouTube URL formats
export function extractVideoId(url: string): string | null {
  const patterns: RegExp[] = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/, // Direct video ID
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) {
      return match[1];
    }
  }
  return null;
}

// Generate thumbnail URLs for different qualities
export function getThumbnailUrls(videoId: string): ThumbnailUrls {
  return {
    maxres: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
    standard: `https://img.youtube.com/vi/${videoId}/sddefault.jpg`,
    high: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    medium: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`,
    default: `https://img.youtube.com/vi/${videoId}/default.jpg`,
  };
}

// Check if thumbnail exists (maxres might not exist for all videos)
export async function checkThumbnailExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: "HEAD" });
    return response.ok;
  } catch {
    return false;
  }
}

// Download thumbnail
export function downloadThumbnail(url: string, filename: string): void {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.setAttribute("target", "_blank");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
