import BaseDialog from './BaseDialog';

import { css } from '@/../styled-system/css';

export default function LinkCreateDialog() {
  return (
    <BaseDialog
      trigger={
        <button
          className={css({
            w: 'full',
            fontSize: '3xl',
            paddingBlock: '5',
            borderWidth: '1px',
            rounded: 'md',
            _hover: {
              cursor: 'pointer',
            },
          })}
        >
          링크 추가
        </button>
      }
    >
      내용
    </BaseDialog>
  );
}
