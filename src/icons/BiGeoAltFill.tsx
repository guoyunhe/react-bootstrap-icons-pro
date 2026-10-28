import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiGeoAltFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='geo-alt-fill'>
      <path d='M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6' />
    </SvgIcon>
  );
}
