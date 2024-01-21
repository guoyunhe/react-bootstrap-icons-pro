import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiChevronBarRight({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-chevron-bar-right', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"
      />
    </svg>
  );
}
