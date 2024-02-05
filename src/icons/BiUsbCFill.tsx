import cn from 'classnames';
import { IconProps } from '../types';

export default function BiUsbCFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-usb-c-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1" />
    </svg>
  );
}
