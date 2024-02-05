import cn from 'classnames';
import { IconProps } from '../types';

export default function BiUsbC({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-usb-c', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M3.5 7.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
      <path d="M0 8a3 3 0 0 1 3-3h10a3 3 0 1 1 0 6H3a3 3 0 0 1-3-3m3-2a2 2 0 1 0 0 4h10a2 2 0 1 0 0-4z" />
    </svg>
  );
}
