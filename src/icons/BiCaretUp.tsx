import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiCaretUp({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-caret-up', className)}
      viewBox="0 0 16 16"
    >
      <path d="M3.204 11h9.592L8 5.519zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659" />
    </svg>
  );
}