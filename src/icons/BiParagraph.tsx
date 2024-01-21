import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiParagraph({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-paragraph', className)}
      viewBox="0 0 16 16"
    >
      <path d="M10.5 15a.5.5 0 0 1-.5-.5V2H9v12.5a.5.5 0 0 1-1 0V9H7a4 4 0 1 1 0-8h5.5a.5.5 0 0 1 0 1H11v12.5a.5.5 0 0 1-.5.5" />
    </svg>
  );
}