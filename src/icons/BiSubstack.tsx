import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiSubstack({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-substack', className)}
      viewBox="0 0 16 16"
    >
      <path d="M15 3.604H1v1.891h14v-1.89ZM1 7.208V16l7-3.926L15 16V7.208zM15 0H1v1.89h14z" />
    </svg>
  );
}
