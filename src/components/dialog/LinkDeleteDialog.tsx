'use client';

import { Dialog } from '@ark-ui/react';
import { FiX } from 'react-icons/fi';

import BaseDialog from './BaseDialog';

import {
  actionButtonGroupStyles,
  titleStyles,
  pointerCursorStyles,
  containerStyles,
} from './styles';

export default function LinkDeleteDialog() {
  return (
    <BaseDialog
      trigger={
        <button className={pointerCursorStyles}>
          <FiX />
        </button>
      }
    >
      <div className={containerStyles}>
        <Dialog.Title className={titleStyles}>
          정말로 삭제하시겠습니까?
        </Dialog.Title>
        <Dialog.Description>
          삭제된 링크는 되돌릴 수 없습니다.
        </Dialog.Description>
        <div className={actionButtonGroupStyles}>
          <Dialog.CloseTrigger
            className={pointerCursorStyles}
            onClick={() => console.log('Cancel')}
          >
            취소
          </Dialog.CloseTrigger>
          <Dialog.CloseTrigger
            className={pointerCursorStyles}
            onClick={() => console.log('Delete')}
          >
            삭제
          </Dialog.CloseTrigger>
        </div>
      </div>
    </BaseDialog>
  );
}
