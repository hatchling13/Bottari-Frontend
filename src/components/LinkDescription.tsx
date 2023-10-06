'use client';
import { useState } from 'react';
import { css } from '../../styled-system/css';

import type { ReactNode } from 'react';
import type { SystemStyleObject } from '../../styled-system/types';

export default function LinkDescription({ children }: { children: ReactNode }) {
  const [isHidden, setIsHidden] = useState(true);

  const hidden: SystemStyleObject = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  const styles = isHidden ? css(hidden) : css({});

  return (
    <>
      <p className={styles}>{children}</p>
      <button
        onClick={() => setIsHidden(!isHidden)}
        className={css({
          alignSelf: 'flex-end',
          '&:hover': { cursor: 'pointer' },
        })}
      >
        {isHidden ? '더 보기' : '숨기기'}
      </button>
    </>
  );
}
