import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiTabletLandscapeFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-tablet-landscape-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M2 14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm11-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  );
}