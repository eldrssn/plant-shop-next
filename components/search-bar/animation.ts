export const defaultStyle = {
  transition: `transform 1s ease-in-out`,
  height: '0',
  transform: 'translateY(-120%)',
};

export const transitionStyles = {
  entering: { transform: 'translateY(0)', height: 'auto' },
  entered: { transform: 'translateY(0)', height: 'auto' },
  exiting: { transform: 'translateY(-120%)', height: 'auto' },
  exited: { transform: 'translateY(-120%)', height: 'auto' },
  unmounted: {},
};
