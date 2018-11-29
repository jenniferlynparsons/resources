export interface Action {
  type: string;
  payload: object;
}

export type LinksProps = [
  {
    id: string;
    guid: string;
    uri?: string;
    title: string;
    typeCode: number;
    links: LinksProps;
  }
];

export interface LinkListProps {
  links: LinksProps;
}
export interface TopicProps {
  links: LinksProps;
  folder?: string;
  title: string;
  guid: string;
  parent?: string;
}

export interface TopicContainerProps {
  links: LinksProps;
  topic: TopicProps;
  folder: FolderTitle;
}

export type FolderTitle = string;

export interface FolderProps {
  links: LinksProps;
  handleClick: (t: object) => void;
}
export interface FoldersContainerProps {
  links: LinksProps;
  handleClick: (t: object) => void;
}

export interface FolderListProps {
  guid: string;
  handleClick: (t: object) => void;
  links: LinksProps;
  parent: string;
  title: string;
  key?: string;
  typeCode: number;
}
export interface AppState {
  links: LinksProps;
  folder: string;
  topic: TopicProps;
}
