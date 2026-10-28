import React from 'react';

import SvgIcon from '../SvgIcon';
import { IconProps } from '../types';

export default function BiIndent(props: IconProps) {
  return (
    <SvgIcon {...props} name='indent'>
      <path
        fillRule='evenodd'
        d='M3 8a.5.5 0 0 1 .5-.5h6.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H3.5A.5.5 0 0 1 3 8'
      />
      <path fillRule='evenodd' d='M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5' />
    </SvgIcon>
  );
}
