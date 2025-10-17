export class Story {
  id: string;
  title: string;
  description: string;
  content: string;
  coverImage?: string;
  ageRange: string;
  category: string;
  duration: number;
  audioUrl?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Story>) {
    Object.assign(this, partial);
  }
}
