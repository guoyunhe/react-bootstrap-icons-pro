import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiSkipEndFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-skip-end-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.693 3.3 4 3.678 4 4.308v7.384c0 .63.692 1.01 1.233.697L11.5 8.753V12a.5.5 0 0 0 1 0z" />
    </svg>
  );
}
