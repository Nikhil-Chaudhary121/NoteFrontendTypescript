// src/types/note.ts
export type NoteId = string | number;

export interface INote {
  _id?: string;          // mongo id (preferred)
  id?: NoteId;           // local/dummy id
  title: string;
  user: string;          // userId
  createdAt?: string;
  updatedAt?: string;
}
