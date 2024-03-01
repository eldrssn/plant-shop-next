export const DELAY = 5000;

export const defaultStyle = {
  transition: `all 500ms ease`,
  opacity: '0',
  height: '0',
  transform: 'translateY(-20px)',
  display: 'none',
};

export const transitionStyles = {
  entering: {
    display: 'block',
    opacity: '0',
  },
  entered: {
    display: 'block',
    opacity: '1',
    transform: 'translateX(0)',
    height: 'auto',
  },
  exiting: {
    display: 'block',
    opacity: '0',
  },
  exited: { display: 'none' },
  unmounted: {},
};