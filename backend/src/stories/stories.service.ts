import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { Story } from './entities/story.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class StoriesService {
  private stories: Story[] = [
    new Story({
      id: '1',
      title: 'Cô Bé Quàng Khăn Đỏ',
      description: 'Câu chuyện về cô bé quàng khăn đỏ đi thăm bà',
      content: 'Ngày xưa, có một cô bé rất dễ thương, ai gặp cũng yêu...',
      ageRange: '3-6 tuổi',
      category: 'cổ tích',
      duration: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    new Story({
      id: '2',
      title: 'Ba Chú Heo Con',
      description: 'Câu chuyện về ba chú heo con xây nhà',
      content: 'Ngày xưa có ba chú heo con cùng nhau đi xây nhà...',
      ageRange: '3-6 tuổi',
      category: 'cổ tích',
      duration: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
    new Story({
      id: '3',
      title: 'Tấm Cám',
      description: 'Truyện cổ tích Việt Nam về hai chị em Tấm Cám',
      content: 'Ngày xưa có hai chị em, chị tên là Tấm, em tên là Cám...',
      ageRange: '6-9 tuổi',
      category: 'cổ tích việt nam',
      duration: 15,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  ];

  create(createStoryDto: CreateStoryDto): Story {
    const newStory = new Story({
      id: uuidv4(),
      ...createStoryDto,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    this.stories.push(newStory);
    return newStory;
  }

  findAll(): Story[] {
    return this.stories;
  }

  findOne(id: string): Story {
    const story = this.stories.find((s) => s.id === id);
    if (!story) {
      throw new NotFoundException(`Story with ID ${id} not found`);
    }
    return story;
  }

  update(id: string, updateStoryDto: UpdateStoryDto): Story {
    const storyIndex = this.stories.findIndex((s) => s.id === id);
    if (storyIndex === -1) {
      throw new NotFoundException(`Story with ID ${id} not found`);
    }

    const updatedStory = new Story({
      ...this.stories[storyIndex],
      ...updateStoryDto,
      updatedAt: new Date(),
    });

    this.stories[storyIndex] = updatedStory;
    return updatedStory;
  }

  remove(id: string): void {
    const storyIndex = this.stories.findIndex((s) => s.id === id);
    if (storyIndex === -1) {
      throw new NotFoundException(`Story with ID ${id} not found`);
    }
    this.stories.splice(storyIndex, 1);
  }

  findByCategory(category: string): Story[] {
    return this.stories.filter(
      (s) => s.category.toLowerCase() === category.toLowerCase(),
    );
  }
}
