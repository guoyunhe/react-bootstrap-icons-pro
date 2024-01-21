import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiRecordBtnFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-record-btn-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m8-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  );
}
