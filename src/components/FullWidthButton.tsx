import { css } from '@/../styled-system/css';

import type { ButtonHTMLAttributes } from 'react';
import type { SystemStyleObject } from '@/../styled-system/types';
import type { EventFor } from '@/types/events';

export default function FullWidthButton({
  cssProps = {},
  type,
  children,
  onClick,
}: {
  cssProps: SystemStyleObject;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: (event: EventFor<'button', 'onClick'>) => void;
}) {
  const className = css(
    {
      w: 'full',
      borderWidth: '1px',
      rounded: 'md',
      _hover: {
        cursor: 'pointer',
      },
    },
    cssProps
  );

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
