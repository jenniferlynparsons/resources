export interface Action {
  type: string;
  payload: object;
}
export interface Link {
  links: Link[];
  dateAdded: string;
  guid: string;
  id: string;
  index: string;
  lastModified: string;
  title: string;
  type: string;
  typeCode: string;
  uri: string;
}

export interface TopicProps {
  links: Link[];
  folder: string;
  topic: TopicProps;
}
export interface TopicState {
  links: Link[];
  dateAdded: string;
  folder: string;
  guid: string;
  handleClick: (t: object) => void;
  id: string;
  index: string;
  lastModified: string;
  title: string;
  topic: TopicProps;
  type: string;
  typeCode: string;
}

export type FolderTitle = string;

export interface FolderProps {
  links: [];
  handleClick: (t: object) => void;
}
export interface FoldersContainerProps {
  links: [];
  topic: TopicProps;
  folder: FolderTitle;
  handleClick: (t: object) => void;
}

export interface FolderListProps {
  links: Link[];
  guid: string;
  handleClick: (t: object) => void;
  parent: string;
  title: string;
}

export interface AppProps {
  links: Link[];
  dateAdded: string;
  folder: string;
  guid: string;
  handleClick: (t: object) => void;
  id: string;
  index: string;
  lastModified: string;
  title: string;
  topic: Topic;
  type: string;
  typeCode: string;
}
export interface AppState {
  links: Link[];
  dateAdded: string;
  folder: string;
  guid: string;
  handleClick: (t: object) => void;
  id: string;
  index: string;
  lastModified: string;
  title: string;
  topic: Topic;
  type: string;
  typeCode: string;
}
