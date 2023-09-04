declare module 'components' {
  interface TLinkItem {
    id: string;
    name: string;
    url: string;
    description: string;
  }

  interface TBundle {
    id: string;
    name: string;
    links: TLinkItem[];
  }
}
