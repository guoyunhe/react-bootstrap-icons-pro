import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiFiletypeTxt({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-filetype-txt', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M14 4.5V14a2 2 0 0 1-2 2h-2v-1h2a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.928 15.849v-3.337h1.136v-.662H0v.662h1.134v3.337zm4.689-3.999h-.894L4.9 13.289h-.035l-.832-1.439h-.932l1.228 1.983-1.24 2.016h.862l.853-1.415h.035l.85 1.415h.907l-1.253-1.992zm1.93.662v3.337h-.794v-3.337H6.619v-.662h3.064v.662H8.546Z"
      />
    </svg>
  );
}
