import cn from 'classnames';
import { IconProps } from '../types';

export default function BiMask({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-mask', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M6.225 1.227A7.5 7.5 0 0 1 10.5 8a7.5 7.5 0 0 1-4.275 6.773 7 7 0 1 0 0-13.546M4.187.966a8 8 0 1 1 7.627 14.069A8 8 0 0 1 4.186.964z" />
    </svg>
  );
}
