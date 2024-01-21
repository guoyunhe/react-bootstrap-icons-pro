import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCalendar3RangeFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-calendar3-range-fill', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2z"
      />
    </svg>
  );
}
