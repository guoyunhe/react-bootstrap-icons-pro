import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChatRightFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='chat-right-fill'>
      <path d='M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z' />
    </SvgIcon>
  );
}
