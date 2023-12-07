'use client';

import { useState } from 'react';

import LabelledTextInput from './LabelledTextInput';
import FullWidthButton from './FullWidthButton';

import { css } from '@/../styled-system/css';
import { EventFor } from '@/types/events';

const buttonStyles = {
  paddingBlock: '1',
  marginBlockStart: '3',
};

export default function LinkForm() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event: EventFor<'form', 'onSubmit'>) {
    event.preventDefault();

    setName('');
    setUrl('');
    setDescription('');
  }

  return (
    <form
      className={css({ display: 'flex', flexDir: 'column', gap: '3' })}
      onSubmit={handleSubmit}
    >
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
      <FullWidthButton cssProps={buttonStyles} type="submit">
        추가
      </FullWidthButton>
    </form>
  );
}
