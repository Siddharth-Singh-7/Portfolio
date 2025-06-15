
import { useState, useRef, useEffect } from 'react';
import { Skeleton } from './ui/skeleton';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

export const OptimizedImage = ({ src, alt, className = '', width, height }: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden ${className}`} ref={imgRef}>
      {isLoading && (
        <Skeleton 
          className="absolute inset-0 bg-gray-800/50 animate-pulse" 
          style={{ width: width || '100%', height: height || '100%' }}
        />
      )}
      
      {hasError ? (
        <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center text-gray-400 text-sm">
          Failed to load
        </div>
      ) : (
        isInView && (
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
            onLoad={handleLoad}
            onError={handleError}
            loading="lazy"
            decoding="async"
          />
        )
      )}
    </div>
  );
};
