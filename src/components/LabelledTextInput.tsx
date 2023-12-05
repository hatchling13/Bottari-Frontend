import { EventFor } from '@/types/events';

import { css } from '@/../styled-system/css';

const inputStyles = css({
  border: '1px solid black',
});

export default function LabelledTextInput({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (event: EventFor<'input', 'onChange'>) => void;
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className={inputStyles}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
