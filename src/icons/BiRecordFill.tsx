import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiRecordFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-record-fill', className)}
      viewBox="0 0 16 16"
    >
      <path fillRule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
    </svg>
  );
}
