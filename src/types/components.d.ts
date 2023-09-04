declare module 'components' {
  interface TLinkItem {
    id: string;
    name: string;
    url: string;
  }

  interface TBundle {
    id: string;
    name: string;
    links: TLinkItem[];
  }
}
