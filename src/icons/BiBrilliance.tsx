import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiBrilliance({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-brilliance', className)}
      viewBox="0 0 16 16"
    >
      <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7" />
    </svg>
  );
}
