export type LinkListItem = {
  id: number;
  title: string;
  link: string;
};

export type TSocialLinkList = LinkListItem & {
  Icon: () => JSX.Element;
};

export type TFooterListItem = {
  id: number;
  title: string;
  links: LinkListItem[];
};

export type TFooterLinksList = TFooterListItem & {
  order: number;
};
