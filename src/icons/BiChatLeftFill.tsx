import { SVGProps } from 'react';
import cn from 'classnames';

export default function BiChatLeftFill({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={cn('bi', 'bi-chat-left-fill', className)}
      viewBox="0 0 16 16"
    >
      <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
    </svg>
  );
}
