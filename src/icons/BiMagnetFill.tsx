import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiMagnetFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-magnet-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M15 12h-4v3h4zM5 12H1v3h4zM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0z" />
    </svg>
  );
}
