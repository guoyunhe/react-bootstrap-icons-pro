import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCircleSquare({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-circle-square', className)}
      viewBox="0 0 16 16"
    >
      <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6" />
      <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a7 7 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79q.145.486.22 1" />
    </svg>
  );
}
