import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiTrello({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-trello', className)}
      viewBox="0 0 16 16"
    >
      <path d="M14.1 0H1.903C.852 0 .002.85 0 1.9v12.19A1.9 1.9 0 0 0 1.902 16h12.199A1.9 1.9 0 0 0 16 14.09V1.9A1.9 1.9 0 0 0 14.1 0M7 11.367a.636.636 0 0 1-.64.633H3.593a.633.633 0 0 1-.63-.633V3.583c0-.348.281-.631.63-.633h2.765c.35.002.632.284.633.633zm6.052-3.5a.633.633 0 0 1-.64.633h-2.78A.636.636 0 0 1 9 7.867V3.583a.636.636 0 0 1 .633-.633h2.778c.35.002.631.285.631.633z" />
    </svg>
  );
}