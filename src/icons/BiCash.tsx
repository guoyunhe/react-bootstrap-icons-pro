import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCash({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-cash', className)}
      viewBox="0 0 16 16"
    >
      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
    </svg>
  );
}
