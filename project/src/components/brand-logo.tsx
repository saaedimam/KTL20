import Image from 'next/image';

export function BrandLogo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const map = {
    sm: { w: 120, h: 32 },
    md: { w: 160, h: 44 },
    lg: { w: 200, h: 56 },
  } as const;
  const { w, h } = map[size];
  return (
    <Image
      src="/images/ktl/logo.png"
      width={w}
      height={h}
      alt="Kattali Textile Ltd"
      priority
      sizes="(max-width: 768px) 50vw, 200px"
    />
  );
}