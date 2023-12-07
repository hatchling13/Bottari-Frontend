'use client';

import { Dialog } from '@ark-ui/react';
import { FiX } from 'react-icons/fi';

import BaseDialog from './BaseDialog';

import { css } from '@/../styled-system/css';

export default function LinkDeleteDialog() {
  return (
    <BaseDialog
      trigger={
        <button
          className={css({
            _hover: {
              cursor: 'pointer',
            },
          })}
        >
          <FiX />
        </button>
      }
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: '3' })}>
        <Dialog.Title className={css({ fontSize: 'xl', fontWeight: 'bold' })}>
          정말로 삭제하시겠습니까?
        </Dialog.Title>
        <Dialog.Description>
          삭제된 링크는 되돌릴 수 없습니다.
        </Dialog.Description>
        <div
          className={css({
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '3',
          })}
        >
          <Dialog.CloseTrigger
            onClick={() => console.log('Cancel')}
            className={css({ cursor: 'pointer' })}
          >
            취소
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger
            onClick={() => console.log('Delete')}
            className={css({ cursor: 'pointer' })}
          >
            삭제
          </Dialog.CloseTrigger>
        </div>
      </div>
    </BaseDialog>
  );
}
