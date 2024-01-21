import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiRecordCircle({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-record-circle', className)}
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
    </svg>
  );
}
