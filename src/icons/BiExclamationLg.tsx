import { IconProps } from '../types';
import cn from 'classnames';

export default function BiExclamationLg({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-exclamation-lg', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
    </svg>
  );
}
