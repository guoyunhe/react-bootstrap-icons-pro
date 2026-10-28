import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiDice1(props: IconProps) {
  return (
    <SvgIcon {...props} name='dice-1'>
      <circle cx='8' cy='8' r='1.5' />
      <path d='M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z' />
    </SvgIcon>
  );
}
