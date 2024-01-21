import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCone({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-cone', className)}
      viewBox="0 0 16 16"
    >
      <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125z" />
    </svg>
  );
}
