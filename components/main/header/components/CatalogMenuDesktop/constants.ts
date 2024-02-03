export const defaultStyle = {
  transition: `all 200ms ease-out`,
  opacity: '0',
  height: '0',
  transform: 'translateY(-20px)',
};

export const transitionStyles = {
  entering: { opacity: '1', transform: 'translateX(0)', height: 'auto' },
  entered: { opacity: '1', transform: 'translateX(0)', height: 'auto' },
  exiting: {},
  exited: {},
  unmounted: {},
};
