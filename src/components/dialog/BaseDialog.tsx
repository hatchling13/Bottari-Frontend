import { Dialog, Portal } from '@ark-ui/react';

import { backDropStyles, positionerStyles, contentStyles } from './styles';

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
