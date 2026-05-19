import Image from 'next/image';

interface SEOImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  title?: string;
  priority?: boolean;
}

export default function SEOImage({
  src,
  alt,
  width,
  height,
  fill,
  className,
  title,
  priority = false,
}: SEOImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      fill={fill}
      className={className}
      title={title || alt}
      priority={priority}
      loading={priority ? undefined : 'lazy'}
      quality={85}
      decoding="async"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
      referrerPolicy="no-referrer"
    />
  );
}
