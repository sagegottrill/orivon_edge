import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  fallbackImage?: string;
  containerClassName?: string;
}

export function LazyVideo({
  src,
  fallbackImage,
  className,
  containerClassName,
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.src = src;
            video.load();
            observer.unobserve(video);
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    observer.observe(video);
    observerRef.current = observer;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handleError = () => {
      setIsError(true);
      setIsLoading(false);
    };

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (video) {
        video.removeEventListener("loadstart", handleLoadStart);
        video.removeEventListener("canplay", handleCanPlay);
        video.removeEventListener("error", handleError);
      }
    };
  }, [src]);

  return (
    <div className={cn("relative", containerClassName)}>
      <video
        ref={videoRef}
        className={cn(
          "w-full",
          {
            "opacity-0": isLoading,
            "opacity-100": !isLoading && !isError,
          },
          className
        )}
        {...props}
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <Spinner size="lg" />
        </div>
      )}

      {isError && fallbackImage && (
        <img
          src={fallbackImage}
          alt="Video fallback"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}