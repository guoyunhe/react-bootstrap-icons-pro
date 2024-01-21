import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCaretDownSquare({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-caret-down-square', className)}
      viewBox="0 0 16 16"
    >
      <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z" />
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
    </svg>
  );
}