export const defaultStyle = {
  transition: `opacity .5s ease-in-out`,
};

export const transitionStyles = {
  entering: { display: 'block', opacity: '0' },
  entered: { display: 'block', opacity: '1' },
  exiting: { display: 'block', opacity: '0' },
  exited: { display: 'none' },
  unmounted: {},
};