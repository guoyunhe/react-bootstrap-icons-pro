import cn from 'classnames';
import { IconProps } from '../types';

export default function BiSkipForward({
  className,
  size = '1em',
  color = 'currentColor',
  ...props
}: IconProps) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-skip-forward', className)}
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill={color}
    >
      <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5M1 4.633v6.734L6.804 8zm7.5 0v6.734L14.304 8z" />
    </svg>
  );
}
