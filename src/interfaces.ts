import { RouteComponentProps } from "@reach/router";

export interface Action {
  type: string;
  payload: object;
}
export interface Bookmark {
  children: Bookmark[];
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
  title: string;
  folder: string;
  parent: string;
  children: [];
}

export type Folder = string;

export interface Props extends RouteComponentProps {
  children: Bookmark[];
  dateAdded: string;
  guid: string;
  id: string;
  index: string;
  lastModified: string;
  title: string;
  type: string;
  typeCode: string;
  folder: string;
  topic: Topic;
  handleClick: (t: object) => void;
}

export interface State {
  topic: Topic;
  folder: string;
  children: Bookmark[];
  dateAdded: string;
  guid: string;
  id: string;
  index: string;
  lastModified: string;
  title: string;
  type: string;
  typeCode: string;
  handleClick: (t: object) => void;
}

export interface Source {
  guid: string;
  title: string;
  index: number;
  dateAdded: string;
  lastModified: number;
  id: number;
  typeCode: number;
  type: string;
  children: {
    guid: string;
    title: string;
    index: number;
    dateAdded: number;
    lastModified: number;
    id: number;
    typeCode: number;
    type: string;

    children: {
      guid: string;
      title: string;
      index: number;
      dateAdded: number;
      lastModified: number;
      id: number;
      typeCode: number;
      type: string;
      children: {
        guid: string;
        title: string;
        index: number;
        dateAdded: number;
        lastModified: number;
        id: number;
        typeCode: number;
        type: string;
      };
    };
  };
}
