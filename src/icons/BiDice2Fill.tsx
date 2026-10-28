import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiDice2Fill(props: IconProps) {
  return (
    <SvgIcon {...props} name='dice-2-fill'>
      <path d='M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3' />
    </SvgIcon>
  );
}
