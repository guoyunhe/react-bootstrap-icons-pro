import cn from 'classnames';
import { IconProps } from '../types';

export default function BiGrid3x2({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-grid-3x2', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5zM1.5 3a.5.5 0 0 0-.5.5V7h4V3zM5 8H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4V8zm4-1V3H6v4zm1 1v4h3.5a.5.5 0 0 0 .5-.5V8zm0-1h4V3.5a.5.5 0 0 0-.5-.5H11z" />
    </svg>
  );
}
