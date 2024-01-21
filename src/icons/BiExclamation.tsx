import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiExclamation({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-exclamation', className)}
      viewBox="0 0 16 16"
    >
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z" />
    </svg>
  );
}
