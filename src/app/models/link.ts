import { Comment } from './comment';

export interface Link {
  id: number;
  title: string;
  url: string;
  voteCount: number;
  domainName: string;
  createdBy: string;
  createdDate: Date;
  modifiedDate: Date;
  prettyCreatedDate: string;
  prettyModifiedDate: string;
  comments: Comment[];
}

