import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiFileFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-file-fill', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2"
      />
    </svg>
  );
}
