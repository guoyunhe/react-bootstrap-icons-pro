import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiEggFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='egg-fill'>
      <path d='M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10' />
    </SvgIcon>
  );
}
