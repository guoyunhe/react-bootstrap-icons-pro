import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiCaretDownFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='caret-down-fill'>
      <path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z' />
    </SvgIcon>
  );
}
