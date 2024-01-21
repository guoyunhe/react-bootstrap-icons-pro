import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiRecord2Fill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-record2-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
      <path d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
    </svg>
  );
}
