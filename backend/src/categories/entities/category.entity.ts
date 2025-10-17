export class Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}
