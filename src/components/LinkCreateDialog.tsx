'use client';

// https://github.com/vercel/next.js/issues/58776

import { Dialog } from '@ark-ui/react';

import BaseDialog from './BaseDialog';
import LinkForm from './LinkForm';
import FullWidthButton from './FullWidthButton';

import { css } from '@/../styled-system/css';

const buttonStyles = {
  fontSize: '3xl',
  paddingBlock: '5',
};

export default function LinkCreateDialog() {
  return (
    <BaseDialog
      trigger={
        <FullWidthButton cssProps={buttonStyles}>링크 추가</FullWidthButton>
      }
    >
      <div className={css({ display: 'flex', flexDir: 'column', gap: '3' })}>
        <Dialog.Title>새로운 링크 추가</Dialog.Title>
        <LinkForm />
      </div>
    </BaseDialog>
  );
}
