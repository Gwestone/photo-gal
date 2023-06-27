export type Image = {
  Title: string;
  Pulse: number;
  Category: Category;
  ImageName: string;
  Tags: string[];
  Author: string;
  Date: number;
  Likes: number;
  UserComments: UserComment[];
  Url: string;
};

export type UserComment = { Author: string; Text: string; Date: number };

export type Category = "Nature" | "Abstract" | "Animals";
