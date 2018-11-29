export interface Action {
  type: string;
  payload: object;
}
export interface Link {
  children: Link[];
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
  children: Link[];
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
export interface TopicState {
  children: Link[];
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
  children: [];
  handleClick: (t: object) => void;
}
export interface FoldersContainerProps {
  children: [];
  topic: TopicProps;
  folder: FolderTitle;
  handleClick: (t: object) => void;
}

export interface FolderListProps {
  children: Link[];
  guid: string;
  handleClick: (t: object) => void;
  parent: string;
  title: string;
}

export interface AppProps {
  children: Link[];
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
  children: Link[];
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
