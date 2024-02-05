import cn from 'classnames';
import { IconProps } from '../types';

export default function BiSquareHalf({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-square-half', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M8 15V1h6a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zm6 1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
    </svg>
  );
}
