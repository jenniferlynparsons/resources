import { RouteComponentProps } from "@reach/router";

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
}

export type Folder = string;

export interface Props extends RouteComponentProps {}

export interface State {
  currentTopic: {
    children: Bookmark[];
    dateAdded: string;
    guid: string;
    id: string;
    index: string;
    lastModified: string;
    title: string;
    type: string;
    typeCode: string;
  };
  folder: string;
  handleClick: (t: object, f: string) => void;
}

export interface Source {
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
