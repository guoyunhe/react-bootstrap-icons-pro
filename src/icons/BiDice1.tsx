import { IconProps } from '../types';
import cn from 'classnames';

export default function BiDice1({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-dice-1', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <circle cx="8" cy="8" r="1.5" />
      <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z" />
    </svg>
  );
}
