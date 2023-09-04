import { css } from '../../styled-system/css';

import Bundle from '@/components/Bundle';

import { bundle1 } from './placeholder';

export default async function Home() {
  return (
    <main
      className={css({
        display: 'flex',
        flexWrap: 'wrap',
        placeContent: 'center',
      })}
    >
      <Bundle {...bundle1} />
    </main>
  );
}
