import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiDoorClosed({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-door-closed', className)}
      viewBox="0 0 16 16"
    >
      <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
      <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    </svg>
  );
}
