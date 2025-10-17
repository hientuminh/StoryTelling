import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [
    new Category({
      id: '1',
      name: 'Cổ Tích',
      slug: 'co-tich',
      description: 'Các câu chuyện cổ tích kinh điển từ khắp nơi trên thế giới',
      icon: '📚',
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    new Category({
      id: '2',
      name: 'Cổ Tích Việt Nam',
      slug: 'co-tich-viet-nam',
      description: 'Truyện cổ tích dân gian Việt Nam',
      icon: '🇻🇳',
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    new Category({
      id: '3',
      name: 'Truyện Về Động Vật',
      slug: 'truyen-ve-dong-vat',
      description: 'Câu chuyện về các bạn động vật đáng yêu',
      icon: '🐾',
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    new Category({
      id: '4',
      name: 'Truyện Ngụ Ngôn',
      slug: 'truyen-ngu-ngon',
      description: 'Truyện ngụ ngôn giàu bài học ý nghĩa',
      icon: '🦊',
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  ];

  create(createCategoryDto: CreateCategoryDto): Category {
    const newCategory = new Category({
      id: uuidv4(),
      ...createCategoryDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.categories.push(newCategory);
    return newCategory;
  }

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: string): Category {
    const category = this.categories.find((c) => c.id === id);
    if (!category) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return category;
  }

  findBySlug(slug: string): Category {
    const category = this.categories.find((c) => c.slug === slug);
    if (!category) {
      throw new NotFoundException(`Category with slug ${slug} not found`);
    }
    return category;
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto): Category {
    const categoryIndex = this.categories.findIndex((c) => c.id === id);
    if (categoryIndex === -1) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    const updatedCategory = new Category({
      ...this.categories[categoryIndex],
      ...updateCategoryDto,
      updatedAt: new Date(),
    });

    this.categories[categoryIndex] = updatedCategory;
    return updatedCategory;
  }

  remove(id: string): void {
    const categoryIndex = this.categories.findIndex((c) => c.id === id);
    if (categoryIndex === -1) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    this.categories.splice(categoryIndex, 1);
  }
}
