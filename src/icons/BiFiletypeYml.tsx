import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiFiletypeYml({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-filetype-yml', className)}
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM2.133 15.849v-1.535l1.339-2.464h-.856l-.855 1.696h-.032L.876 11.85H0l1.339 2.479v1.52zm2.287 0v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H5.66L4.52 11.85h-.805v3.999zm4.71-.674h1.696v.674H8.338V11.85h.791v3.325Z"
      />
    </svg>
  );
}