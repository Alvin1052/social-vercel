export interface Post {
  id: string;
  title: string;
  content: string;
  tags: string[];
  imageUrl: string;
  createdAt: string;
  likes: number;
  comments: number;
  author: Author;
}
export interface Author {
  id: number;
  name: string;
  email: string;
}

export interface Page {
  data: Post[];
  total: number;
  page: number;
  lastPage: number;
}

export interface Comment {
  id: string;
  content: string;
  createdAt: string;
  author: {
    name: string;
    headline: string;
    avatarUrl: string;
  };
}
