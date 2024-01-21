import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCircleHalf({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-circle-half', className)}
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
    </svg>
  );
}
