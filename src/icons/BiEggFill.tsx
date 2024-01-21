import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiEggFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-egg-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10" />
    </svg>
  );
}
