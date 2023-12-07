import { css } from '@/../styled-system/css';

export const backDropStyles = css({
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  position: 'fixed',
  inset: '0px',
});

export const positionerStyles = css({
  w: 'screen',
  h: 'screen',
  position: 'fixed',
  inset: '0px',
  display: 'flex',
  placeContent: 'center',
});

export const contentStyles = css({
  alignSelf: 'center',
  backgroundColor: 'white',
  padding: '5',
  borderRadius: 'md',
});

export const titleStyles = css({ fontSize: 'xl', fontWeight: 'bold' });

export const pointerCursorStyles = css({ cursor: 'pointer' });

export const containerStyles = css({
  display: 'flex',
  flexDir: 'column',
  gap: '3',
});

export const actionButtonGroupStyles = css({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '3',
});
