import { IconProps } from '../types';
import cn from 'classnames';

export default function BiRecord2({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-record2', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8m0 1A5 5 0 1 0 8 3a5 5 0 0 0 0 10" />
      <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
    </svg>
  );
}
