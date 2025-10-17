import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'Welcome to Storytelling API',
      version: '1.0.0',
      endpoints: {
        docs: '/api/docs',
        stories: '/api/stories',
        categories: '/api/categories',
      },
    };
  }
}
