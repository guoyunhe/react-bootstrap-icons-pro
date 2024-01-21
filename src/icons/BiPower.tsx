import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiPower({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-power', className)}
      viewBox="0 0 16 16"
    >
      <path d="M7.5 1v7h1V1z" />
      <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
    </svg>
  );
}
