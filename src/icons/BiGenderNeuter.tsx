import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiGenderNeuter(props: IconProps) {
  return (
    <SvgIcon {...props} name='gender-neuter'>
      <path
        fillRule='evenodd'
        d='M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V15.5a.5.5 0 0 1-1 0V9.975A5 5 0 0 1 3 5'
      />
    </SvgIcon>
  );
}
