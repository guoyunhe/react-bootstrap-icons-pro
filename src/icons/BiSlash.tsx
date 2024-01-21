import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiSlash({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-slash', className)}
      viewBox="0 0 16 16"
    >
      <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0" />
    </svg>
  );
}
