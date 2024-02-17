export const defaultStyle = {
  transition: `transform 1s ease-in-out`,
  height: '0',
  transform: 'translateX(-100%)',
};

export const transitionStyles = {
  entering: { transform: 'translateX(0)', height: 'auto' },
  entered: { transform: 'translateX(0)', height: 'auto' },
  exiting: { transform: 'translateX(-100%)', height: 'auto' },
  exited: { transform: 'translateX(-100%)', height: 'auto' },
  unmounted: {},
};
