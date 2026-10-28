import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiPhoneLandscapeFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='phone-landscape-fill'>
      <path d='M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2' />
    </SvgIcon>
  );
}
