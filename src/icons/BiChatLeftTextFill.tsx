import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiChatLeftTextFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='chat-left-text-fill'>
      <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z' />
    </SvgIcon>
  );
}
