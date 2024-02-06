export type LinkListItem = {
  id: number;
  title: string;
  link: string;
};

export type TSocialLinks = LinkListItem & {
  Icon: () => JSX.Element;
};

export type TCommonLink = {
  id: number;
  title: string;
  links: LinkListItem[];
};

export type TCommonLinks = TCommonLink & {
  order: number;
};
