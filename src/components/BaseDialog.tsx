import { Dialog, Portal } from '@ark-ui/react';

import { css } from '@/../styled-system/css';

const backDropStyles = css({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  inset: '0px',
});

const positionerStyles = css({
  w: 'screen',
  h: 'screen',
  position: 'fixed',
  inset: '0px',
  display: 'flex',
  placeContent: 'center',
});

const contentStyles = css({
  alignSelf: 'center',
  backgroundColor: 'white',
  padding: '5',
  borderRadius: 'md',
});

export default function BaseDialog({
  trigger,
  children,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={true}>{trigger}</Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop className={backDropStyles} />
        <Dialog.Positioner className={positionerStyles}>
          <Dialog.Content className={contentStyles}>{children}</Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
