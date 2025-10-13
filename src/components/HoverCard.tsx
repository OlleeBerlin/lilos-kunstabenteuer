'use client';

import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
}

export default function HoverCard({
  children,
  className = '',
  hoverScale = 1.05
}: HoverCardProps) {
  return (
    <div
      className={`transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg ${className}`}
      style={{
        transform: `scale(${hoverScale === 1.05 ? 1 : hoverScale})`,
      }}
    >
      {children}
    </div>
  );
}

