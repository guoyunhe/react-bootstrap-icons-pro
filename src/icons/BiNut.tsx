import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiNut({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-nut', className)}
      viewBox="0 0 16 16"
    >
      <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1z" />
      <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33m-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
    </svg>
  );
}
