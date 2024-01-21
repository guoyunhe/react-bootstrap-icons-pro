import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiAmd({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-amd', className)}
      viewBox="0 0 16 16"
    >
      <path d="m.334 0 4.358 4.359h7.15v7.15l4.358 4.358V0zM.2 9.72l4.487-4.488v6.281h6.28L6.48 16H.2z" />
    </svg>
  );
}
