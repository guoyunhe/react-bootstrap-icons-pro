import { IconProps } from '../types';
import cn from 'classnames';

export default function BiCassetteFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-cassette-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h.191l1.862-3.724A.5.5 0 0 1 4 10h8a.5.5 0 0 1 .447.276L14.31 14h.191a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zM4 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2m8 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2M6 6a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1" />
      <path d="m13.191 14-1.5-3H4.309l-1.5 3z" />
    </svg>
  );
}
