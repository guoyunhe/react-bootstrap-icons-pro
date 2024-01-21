import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiGenderFemale({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-gender-female', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5"
      />
    </svg>
  );
}
