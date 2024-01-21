import { IconProps } from '../types';
import cn from 'classnames';

export default function BiHdmi({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-hdmi', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M2.5 7a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z" />
      <path d="M1 5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h.293l.707.707a1 1 0 0 0 .707.293h10.586a1 1 0 0 0 .707-.293l.707-.707H15a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm0 1h14v3h-.293a1 1 0 0 0-.707.293l-.707.707H2.707L2 9.293A1 1 0 0 0 1.293 9H1z" />
    </svg>
  );
}
