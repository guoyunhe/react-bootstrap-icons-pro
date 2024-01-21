import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiMicrosoft({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-microsoft', className)}
      viewBox="0 0 16 16"
    >
      <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z" />
    </svg>
  );
}
