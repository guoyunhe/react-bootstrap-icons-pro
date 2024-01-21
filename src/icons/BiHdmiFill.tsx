import { IconProps } from '../types';
import cn from 'classnames';

export default function BiHdmiFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-hdmi-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M1 5a1 1 0 0 0-1 1v3.293c0 .39.317.707.707.707.188 0 .368.075.5.207l.5.5a1 1 0 0 0 .707.293h11.172a1 1 0 0 0 .707-.293l.5-.5a.7.7 0 0 1 .5-.207c.39 0 .707-.317.707-.707V6a1 1 0 0 0-1-1zm1.5 2h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1" />
    </svg>
  );
}
