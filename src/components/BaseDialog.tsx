import {
  Dialog,
  DialogBackdrop,
  DialogContainer,
  DialogContent,
  DialogTrigger,
  Portal,
} from '@ark-ui/react';

import { css } from '@/../styled-system/css';

export default function BaseDialog({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild={true}>{trigger}</DialogTrigger>
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
            {children}
          </DialogContent>
        </DialogContainer>
      </Portal>
    </Dialog>
  );
}
