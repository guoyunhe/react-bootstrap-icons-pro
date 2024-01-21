import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCalendar3Fill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-calendar3-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3z" />
    </svg>
  );
}
