import cn from 'classnames';
import { IconProps } from '../types';

export default function BiEasel3({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-easel3', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path
        fillRule="evenodd"
        d="M8.5 13.134V12h5a1.5 1.5 0 0 0 1.5-1.5V2h.5a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1H1v8.5A1.5 1.5 0 0 0 2.5 12h5v1.134a1 1 0 1 0 1 0M2 2v8.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V2z"
      />
    </svg>
  );
}
