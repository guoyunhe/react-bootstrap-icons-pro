import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiExposure({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-exposure', className)}
      viewBox="0 0 16 16"
    >
      <path d="M8.5 4a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V7h2a.5.5 0 0 0 0-1h-2zm-3 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z" />
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8" />
    </svg>
  );
}