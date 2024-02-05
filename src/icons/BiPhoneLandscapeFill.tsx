import cn from 'classnames';
import { IconProps } from '../types';

export default function BiPhoneLandscapeFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-phone-landscape-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
    </svg>
  );
}
