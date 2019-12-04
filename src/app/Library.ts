export class User {
  FullName: string;
  UserMobile: string;
  UserEmail: string;
}

export interface LoginUser {
  email: string;
  password: string;
}

export default class Books {
  BookID: number;
  BookName: string;
  BookAuthor: string;
  BookCost: number;
  issued: boolean;
}