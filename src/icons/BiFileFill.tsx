import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiFileFill(props: IconProps) {
  return (
    <SvgIcon {...props} name='file-fill'>
      <path
        fillRule='evenodd'
        d='M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2'
      />
    </SvgIcon>
  );
}
