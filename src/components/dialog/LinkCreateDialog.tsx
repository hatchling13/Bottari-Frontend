'use client';

// https://github.com/vercel/next.js/issues/58776

import { Dialog } from '@ark-ui/react';

import BaseDialog from './BaseDialog';
import LinkForm from '../LinkForm';
import FullWidthButton from '../FullWidthButton';

import { containerStyles } from './styles';

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
      <div className={containerStyles}>
        <Dialog.Title>새로운 링크 추가</Dialog.Title>
        <LinkForm />
      </div>
    </BaseDialog>
  );
}
