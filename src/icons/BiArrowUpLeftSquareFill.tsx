import { IconProps } from '../types';
import cn from 'classnames';

export default function BiArrowUpLeftSquareFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-arrow-up-left-square-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm8.096 10.803L6 6.707v2.768a.5.5 0 0 1-1 0V5.5a.5.5 0 0 1 .5-.5h3.975a.5.5 0 1 1 0 1H6.707l4.096 4.096a.5.5 0 1 1-.707.707" />
    </svg>
  );
}