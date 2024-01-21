import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiSlashLg({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-slash-lg', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0"
      />
    </svg>
  );
}
