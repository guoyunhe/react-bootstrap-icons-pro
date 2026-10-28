import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiPhoneFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='phone-fill'>
      <path d='M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0' />
    </SvgIcon>
  );
}
