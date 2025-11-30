import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  aspectRatio?: "video" | "square" | "auto";
}

const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className = "",
  loading = "lazy",
  fetchPriority = "auto",
  aspectRatio = "auto",
}: OptimizedImageProps) => {
  const [error, setError] = useState(false);
  const [webpError, setWebpError] = useState(false);

  const aspectClass =
    aspectRatio === "video"
      ? "aspect-video"
      : aspectRatio === "square"
      ? "aspect-square"
      : "";

  // If WebP fails, fallback to original
  if (webpSrc && !webpError && !error) {
    return (
      <picture className={`${aspectClass} ${className}`}>
        <source srcSet={webpSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${className}`}
          loading={loading}
          fetchPriority={fetchPriority}
          onError={() => setWebpError(true)}
        />
      </picture>
    );
  }

  return (
    <div className={`${aspectClass} overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading={loading}
        fetchPriority={fetchPriority}
        onError={() => setError(true)}
      />
    </div>
  );
};

export default OptimizedImage;

