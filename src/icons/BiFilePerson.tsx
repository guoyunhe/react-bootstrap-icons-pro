import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiFilePerson({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-file-person', className)}
      viewBox="0 0 16 16"
    >
      <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
      <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    </svg>
  );
}
