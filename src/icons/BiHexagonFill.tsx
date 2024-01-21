import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiHexagonFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-hexagon-fill', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866z"
      />
    </svg>
  );
}
