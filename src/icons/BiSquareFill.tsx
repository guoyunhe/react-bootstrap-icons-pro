import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiSquareFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-square-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z" />
    </svg>
  );
}
