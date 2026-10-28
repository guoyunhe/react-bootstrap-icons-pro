import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiSlashLg(props: IconProps) {
  return (
    <SvgIcon {...props} name='slash-lg'>
      <path
        fillRule='evenodd'
        d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0'
      />
    </SvgIcon>
  );
}
