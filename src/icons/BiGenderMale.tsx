import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiGenderMale({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-gender-male', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"
      />
    </svg>
  );
}
