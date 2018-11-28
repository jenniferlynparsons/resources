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

export interface Topic {
  children: [];
  dateAdded: string;
  guid: string;
  id: string;
  index: string;
  lastModified: string;
  parent: string;
  title: string;
  type: string;
  typeCode: string;
  uri: string;
}

export type FolderTitle = string;

export interface Folder {
  children: [];
  guid: string;
  parent: string;
  title: string;
}

export interface Props {
  children: Link[];
  dateAdded: string;
  folder: string;
  folders: [];
  guid: string;
  handleClick: (t: object) => void;
  id: string;
  index: string;
  lastModified: string;
  parent: string;
  title: string;
  topic: Topic;
  type: string;
  typeCode: string;
}

export interface State {
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
