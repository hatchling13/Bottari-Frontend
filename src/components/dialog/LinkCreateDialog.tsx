'use client';

import { useState } from 'react';
import { useFormStatus } from 'react-dom';
import { Dialog } from '@ark-ui/react';

import BaseDialog from './BaseDialog';
import FullWidthButton from '../FullWidthButton';
import LabelledTextInput from '../LabelledTextInput';

import { containerStyles } from './styles';

import { css } from '@/../../styled-system/css';

const triggerStyles = {
  fontSize: '3xl',
  paddingBlock: '5',
};

const createButtonStyles = css({
  w: 'full',
  borderWidth: '1px',
  rounded: 'md',
  paddingBlock: '1',
  marginBlockStart: '3',
  '&:hover': {
    cursor: 'pointer',
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

const formStyles = css({ display: 'flex', flexDir: 'column', gap: '3' });

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button className={createButtonStyles} disabled={pending}>
      {pending ? '처리 중' : '추가'}
    </button>
  );
}

export default function LinkCreateDialog({
  createAction,
}: {
  createAction: (formData: FormData) => Promise<void>;
}) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  return (
    <BaseDialog
      trigger={
        <FullWidthButton cssProps={triggerStyles}>링크 추가</FullWidthButton>
      }
    >
      <div className={containerStyles}>
        <Dialog.Title>새로운 링크 추가</Dialog.Title>
        <form className={formStyles} action={createAction}>
          <LabelledTextInput
            label="이름"
            name="name"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
          <LabelledTextInput
            label="URL"
            name="url"
            value={url}
            onChange={(event) => setUrl(event.currentTarget.value)}
          />
          <LabelledTextInput
            label="설명"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.currentTarget.value)}
          />
          <Submit />
        </form>
      </div>
    </BaseDialog>
  );
}
