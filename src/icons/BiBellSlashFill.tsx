import { IconProps } from '../types';
import cn from 'classnames';

export default function BiBellSlashFill({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-bell-slash-fill', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M5.164 14H15c-1.5-1-2-5.902-2-7q0-.396-.06-.776zm6.288-10.617A5 5 0 0 0 8.995 2.1a1 1 0 1 0-1.99 0A5 5 0 0 0 3 7c0 .898-.335 4.342-1.278 6.113zM10 15a2 2 0 1 1-4 0zm-9.375.625a.53.53 0 0 0 .75.75l14.75-14.75a.53.53 0 0 0-.75-.75z" />
    </svg>
  );
}
