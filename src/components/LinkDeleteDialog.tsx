'use client';

import {
  Dialog,
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContainer,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Portal,
} from '@ark-ui/react';
import { FiX } from 'react-icons/fi';

import { css } from '@/../styled-system/css';

export default function LinkDeleteDialog() {
  return (
    <Dialog>
      <DialogTrigger
        className={css({
          _hover: {
            cursor: 'pointer',
          },
        })}
      >
        <FiX />
      </DialogTrigger>
      <Portal>
        <DialogBackdrop
          className={css({
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            position: 'fixed',
            inset: '0px',
          })}
        />
        <DialogContainer
          className={css({
            w: 'screen',
            h: 'screen',
            position: 'fixed',
            inset: '0px',
            display: 'flex',
            placeContent: 'center',
          })}
        >
          <DialogContent
            className={css({
              alignSelf: 'center',
              backgroundColor: 'white',
              padding: '5',
              borderRadius: 'md',
            })}
          >
            <div
              className={css({ display: 'flex', flexDir: 'column', gap: '3' })}
            >
              <DialogTitle
                className={css({ fontSize: 'xl', fontWeight: 'bold' })}
              >
                정말로 삭제하시겠습니까?
              </DialogTitle>
              <DialogDescription>
                삭제된 링크는 되돌릴 수 없습니다.
              </DialogDescription>
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: '3',
                })}
              >
                <DialogCloseTrigger
                  onClick={() => console.log('Cancel')}
                  className={css({ cursor: 'pointer' })}
                >
                  취소
                </DialogCloseTrigger>
                <DialogCloseTrigger
                  onClick={() => console.log('Delete')}
                  className={css({ cursor: 'pointer' })}
                >
                  삭제
                </DialogCloseTrigger>
              </div>
            </div>
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
}
