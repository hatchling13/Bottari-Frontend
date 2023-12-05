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

type inputAttribute = [string, string];

export default function LinkForm() {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  function handleClick(event: EventFor<'button', 'onClick'>) {
    event.preventDefault();
    alert(`${name}\n${url}\n${description}`);
    setName('');
    setUrl('');
    setDescription('');
  }

  // Find some way to make arrays with label/name, zip them to make array of tuple and use it

  return (
    <form className={css({ display: 'flex', flexDir: 'column', gap: '3' })}>
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
      <FullWidthButton
        cssProps={buttonStyles}
        type="submit"
        onClick={handleClick}
      >
        추가
      </FullWidthButton>
    </form>
  );
}
