import StartButton from '@/components/StartButton';
import { auth } from '../../auth';
import { css } from '../../styled-system/css';

export default async function Home() {
  const session = await auth();

  return (
    <main
      className={css({
        h: 'screen',
        display: 'flex',
        flexDir: 'column',
      })}
    >
      <section
        className={css({
          flexGrow: '1',
          display: 'flex',
          flexDir: 'column',
          gap: '5',
          placeContent: 'center',
        })}
      >
        <h1
          className={css({
            alignSelf: 'center',
            fontSize: '7xl',
            fontWeight: 'bold',
          })}
        >
          보따리
        </h1>
        <h2
          className={css({
            whiteSpace: 'pre-line',
            alignSelf: 'center',
            fontSize: '3xl',
          })}
        >
          {'복잡한 링크 모음들!\n 깔끔하고 보기 쉽게'}
        </h2>
        <div
          className={css({
            paddingTop: '16',
            display: 'flex',
            placeContent: 'center',
          })}
        >
          <StartButton session={session} />
        </div>
      </section>
      <footer
        className={css({
          paddingY: '3',
          justifySelf: 'flex-end',
          display: 'flex',
          flexDir: 'column',
          gap: '1',
        })}
      >
        <p className={css({ alignSelf: 'center' })}>
          Created by{' '}
          <a
            href="https://github.com/hatchling13"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeongwook Park
          </a>
          .
        </p>
        <a
          href="https://github.com/hatchling13/Bottari"
          target="_blank"
          rel="noopener noreferrer"
          className={css({ alignSelf: 'center' })}
        >
          Website repository
        </a>
      </footer>
    </main>
  );
}
