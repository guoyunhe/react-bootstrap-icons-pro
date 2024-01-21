import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiLayoutSidebarReverse({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-layout-sidebar-reverse', className)}
      viewBox="0 0 16 16"
    >
      <path d="M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2z" />
    </svg>
  );
}
