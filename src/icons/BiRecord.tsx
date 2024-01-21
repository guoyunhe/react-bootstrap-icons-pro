import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiRecord({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-record', className)}
      viewBox="0 0 16 16"
    >
      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
    </svg>
  );
}
