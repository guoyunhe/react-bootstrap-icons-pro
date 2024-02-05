import cn from 'classnames';
import { IconProps } from '../types';

export default function BiTabletFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-tablet-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
    </svg>
  );
}
