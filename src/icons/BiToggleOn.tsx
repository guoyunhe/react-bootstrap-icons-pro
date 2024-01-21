import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiToggleOn({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-toggle-on', className)}
      viewBox="0 0 16 16"
    >
      <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8" />
    </svg>
  );
}
