import cn from 'classnames';
import { IconProps } from '../types';

export default function BiRewindCircle({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-rewind-circle', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M7.729 5.055a.5.5 0 0 0-.52.038l-3.5 2.5a.5.5 0 0 0 0 .814l3.5 2.5A.5.5 0 0 0 8 10.5V8.614l3.21 2.293A.5.5 0 0 0 12 10.5v-5a.5.5 0 0 0-.79-.407L8 7.386V5.5a.5.5 0 0 0-.271-.445" />
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8" />
    </svg>
  );
}
