import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiChevronBarDown({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-chevron-bar-down', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M3.646 4.146a.5.5 0 0 1 .708 0L8 7.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708M1 11.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"
      />
    </svg>
  );
}