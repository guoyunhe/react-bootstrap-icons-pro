import cn from 'classnames';
import { IconProps } from '../types';

export default function BiMouse3Fill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-mouse3-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M8.5.069A15 15 0 0 0 7 0q-.891.002-1.527.463c-.418.302-.717.726-.93 1.208-.386.873-.522 2.01-.54 3.206l4.497 1zM3.71 5.836 3.381 6A2.5 2.5 0 0 0 2 8.236v2.576C2 13.659 4.22 16 7 16h2c2.78 0 5-2.342 5-5.188V8.123l-9-2v.003l.008.353c.007.3.023.715.053 1.175.063.937.186 2.005.413 2.688a.5.5 0 1 1-.948.316c-.273-.817-.4-2-.462-2.937A30 30 0 0 1 4 6.003q0-.05.01-.1zM14 7.1V5.187c0-1.13-.272-2.044-.748-2.772-.474-.726-1.13-1.235-1.849-1.59A7.5 7.5 0 0 0 9.5.212v5.887l4.5 1z" />
    </svg>
  );
}
