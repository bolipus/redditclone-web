export interface Comment {
  id: number;
  body: string;
  createdBy: string;
  createdDate: Date;
  modifiedDate: Date;
  prettyCreatedDate: string;
  prettyModifiedDate: string;
}
