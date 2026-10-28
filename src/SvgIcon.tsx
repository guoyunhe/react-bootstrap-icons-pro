import React from 'react';

import { IconProps } from './types';

interface SvgIconProps extends IconProps {
  name: string;
}

export default function SvgIcon({
  name,
  className,
  size = '1em',
  color = 'currentColor',
  children,
  ...props
}: SvgIconProps) {
  return (
    <svg
      {...props}
      className={className ? `bi bi-${name} ${className}` : `bi bi-${name}`}
      viewBox='0 0 16 16'
      width={size}
      height={size}
      fill={color}
    >
      {children}
    </svg>
  );
}
