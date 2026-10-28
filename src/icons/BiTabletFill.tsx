import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiTabletFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='tablet-fill'>
      <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0' />
    </SvgIcon>
  );
}
