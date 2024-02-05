import cn from 'classnames';
import { IconProps } from '../types';

export default function BiFileBreakFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-file-break-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M4 0h8a2 2 0 0 1 2 2v7H2V2a2 2 0 0 1 2-2M2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z" />
    </svg>
  );
}
