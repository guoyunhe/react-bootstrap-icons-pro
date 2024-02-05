import cn from 'classnames';
import { IconProps } from '../types';

export default function BiCircleFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-circle-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <circle cx="8" cy="8" r="8" />
    </svg>
  );
}
