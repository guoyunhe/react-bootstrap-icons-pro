import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiDashLg({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-dash-lg', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
      />
    </svg>
  );
}
