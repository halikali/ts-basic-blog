export interface IPost {
  title: string;
  url: string;
  content: string;
  summary: string;
  status: string;
  createdAt: string;
  id?: string;
}

export interface IPosts{
    posts: IPost[];
}
