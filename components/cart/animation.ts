export const defaultStyle = {
  transition: `transform 1s ease-in-out`,
  transform: 'translateX(0)',
};

export const transitionStyles = {
  entering: { transform: 'translateX(0)' },
  entered: { transform: 'translateX(0)' },
  exiting: { transform: 'translateX(100%)' },
  exited: { transform: 'translateX(100%)' },
  unmounted: {},
};
