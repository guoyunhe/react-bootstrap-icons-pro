import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiSuitcase2({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-suitcase2', className)}
      viewBox="0 0 16 16"
    >
      <path d="M6.5 0a.5.5 0 0 0-.5.5V3H5a2 2 0 0 0-2 2v8a2 2 0 0 0 1.031 1.75A1.003 1.003 0 0 0 5 16a1 1 0 0 0 1-1h4a1 1 0 1 0 1.969-.25A2 2 0 0 0 13 13V5a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-.5-.5zM9 3H7V1h2zm3 10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h8zM5 4h6a1 1 0 0 1 1 1v1H4V5a1 1 0 0 1 1-1" />
    </svg>
  );
}