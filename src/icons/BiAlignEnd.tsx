import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiAlignEnd({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-align-end', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"
      />
      <path d="M13 7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z" />
    </svg>
  );
}
