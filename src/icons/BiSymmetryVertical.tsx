import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiSymmetryVertical({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-symmetry-vertical', className)}
      viewBox="0 0 16 16"
    >
      <path d="M7 2.5a.5.5 0 0 0-.939-.24l-6 11A.5.5 0 0 0 .5 14h6a.5.5 0 0 0 .5-.5zm2.376-.484a.5.5 0 0 1 .563.245l6 11A.5.5 0 0 1 15.5 14h-6a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .376-.484M10 4.46V13h4.658z" />
    </svg>
  );
}
