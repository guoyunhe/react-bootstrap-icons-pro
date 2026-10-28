import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCaretDown(props: IconProps) {
  return (
    <SvgIcon {...props} name='caret-down'>
      <path d='M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659' />
    </SvgIcon>
  );
}
