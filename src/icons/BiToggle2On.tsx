import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiToggle2On({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-toggle2-on', className)}
      viewBox="0 0 16 16"
    >
      <path d="M7 5H3a3 3 0 0 0 0 6h4a5 5 0 0 1-.584-1H3a2 2 0 1 1 0-4h3.416q.235-.537.584-1" />
      <path d="M16 8A5 5 0 1 1 6 8a5 5 0 0 1 10 0" />
    </svg>
  );
}
