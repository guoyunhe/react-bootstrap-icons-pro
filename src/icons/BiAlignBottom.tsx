import cn from 'classnames';
import { IconProps } from '../types';

export default function BiAlignBottom({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-align-bottom', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <rect width="4" height="12" x="6" y="1" rx="1" />
      <path d="M1.5 14a.5.5 0 0 0 0 1zm13 1a.5.5 0 0 0 0-1zm-13 0h13v-1h-13z" />
    </svg>
  );
}
