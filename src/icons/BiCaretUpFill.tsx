import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCaretUpFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='caret-up-fill'>
      <path d='m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z' />
    </SvgIcon>
  );
}
