import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiArrow90degDown({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-arrow-90deg-down', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708z"
      />
    </svg>
  );
}
