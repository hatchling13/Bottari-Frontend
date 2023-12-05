import { DialogTitle } from '@ark-ui/react';

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
        <DialogTitle>새로운 링크 추가</DialogTitle>
        <LinkForm />
      </div>
    </BaseDialog>
  );
}
