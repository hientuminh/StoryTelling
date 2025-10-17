# Backend - Kể Chuyện Cho Bé

Backend API của ứng dụng kể chuyện cho bé được xây dựng với NestJS và TypeScript.

## Công Nghệ

- **NestJS 10** - Progressive Node.js framework
- **TypeScript** - Type-safe JavaScript
- **Swagger** - API documentation
- **Class Validator** - DTO validation

## Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run start:dev

# Build production
npm run build

# Start production server
npm run start:prod

# Linting
npm run lint

# Format code
npm run format

# Run tests
npm run test
```

## Cấu Trúc Thư Mục

```
backend/
├── src/
│   ├── main.ts              # Entry point
│   ├── app.module.ts        # Root module
│   ├── app.controller.ts    # Root controller
│   ├── app.service.ts       # Root service
│   ├── stories/             # Stories module
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── stories.controller.ts
│   │   ├── stories.service.ts
│   │   └── stories.module.ts
│   ├── categories/          # Categories module
│   │   ├── dto/
│   │   ├── entities/
│   │   ├── categories.controller.ts
│   │   ├── categories.service.ts
│   │   └── categories.module.ts
│   └── common/              # Common utilities
│       ├── dto/
│       ├── filters/
│       ├── interceptors/
│       └── guards/
├── test/                    # E2E tests
├── tsconfig.json
├── nest-cli.json
└── package.json
```

## Environment Variables

Tạo file `.env`:

```
PORT=3001
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

## API Endpoints

### Stories
- `GET /api/stories` - Lấy tất cả truyện
- `GET /api/stories?category=co-tich` - Lọc truyện theo thể loại
- `GET /api/stories/:id` - Lấy truyện theo ID
- `POST /api/stories` - Tạo truyện mới
- `PATCH /api/stories/:id` - Cập nhật truyện
- `DELETE /api/stories/:id` - Xóa truyện

### Categories
- `GET /api/categories` - Lấy tất cả thể loại
- `GET /api/categories/:id` - Lấy thể loại theo ID
- `GET /api/categories/slug/:slug` - Lấy thể loại theo slug
- `POST /api/categories` - Tạo thể loại mới
- `PATCH /api/categories/:id` - Cập nhật thể loại
- `DELETE /api/categories/:id` - Xóa thể loại

## API Documentation

Swagger documentation sẽ có tại: `http://localhost:3001/api/docs`

## Development

Server sẽ chạy tại `http://localhost:3001`

### Hot Reload

Khi chạy `npm run start:dev`, server sẽ tự động reload khi có thay đổi trong code.

## Testing

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## Features

- RESTful API
- Swagger documentation
- Request validation với class-validator
- CORS enabled
- Environment configuration
- Global error handling
- DTO pattern
- Module-based architecture
