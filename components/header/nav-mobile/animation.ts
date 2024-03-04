export const getDefaultStyles = (index: number) => ({
  transition: `all 200ms ease-in-out`,
  transitionDelay: `${100 * index}ms`,
  opacity: '0',
  transform: 'translateX(-10px)',
});

export const transitionStyles = {
  entering: { opacity: '1', transform: 'translateX(0)' },
  entered: { opacity: '1', transform: 'translateX(0)' },
  exiting: {},
  exited: {},
  unmounted: {},
};
