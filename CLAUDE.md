# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Vietnamese children's storytelling application built with a monorepo structure containing a Next.js frontend and NestJS backend. The app allows children to explore interactive stories with audio narration and is designed to develop language and creative thinking skills.

## Architecture

### Monorepo Structure
- **frontend/** - Next.js 14 with App Router, TypeScript, TailwindCSS
- **backend/** - NestJS REST API with Swagger documentation

### Frontend (Next.js)
- Uses **App Router** architecture (not Pages Router)
- Path aliases configured: `@/*` maps to `./src/*` with specific paths for `@/components`, `@/lib`, `@/types`, `@/styles`
- Google Fonts loaded: Inter (variable) and Poppins (400, 500, 600, 700 weights)
- Metadata managed in layout.tsx with Vietnamese language support
- TailwindCSS with custom configuration for theming
- Default API URL: `http://localhost:3001` (configurable via `NEXT_PUBLIC_API_URL`)

### Backend (NestJS)
- Global API prefix: `/api` (all routes prefixed with `/api`)
- CORS enabled for frontend at `http://localhost:3000`
- Global validation pipe with `whitelist`, `transform`, and `forbidNonWhitelisted` enabled
- Swagger documentation at `/api/docs`
- Module structure:
  - **StoriesModule** - CRUD operations for stories with category filtering
  - **CategoriesModule** - Manage story categories
  - Services use in-memory storage (no database currently configured)

### Key Type Definitions (frontend/src/types/index.ts)
```typescript
Story {
  id, title, description, content, coverImage,
  ageRange, category, duration, audioUrl,
  createdAt, updatedAt
}
Category { id, name, slug, description, icon }
User { id, name, email, avatar }
ApiResponse<T> { data, message, success }
```

## Development Commands

### Frontend
```bash
cd frontend
npm install              # Install dependencies
npm run dev              # Start dev server at localhost:3000
npm run build            # Build for production
npm start                # Start production server
npm run type-check       # TypeScript type checking (no emit)
npm run lint             # ESLint
```

### Backend
```bash
cd backend
npm install              # Install dependencies
npm run start:dev        # Start dev server at localhost:3001 with watch mode
npm run start:debug      # Start with debugging enabled
npm run build            # Build for production
npm run start:prod       # Start production server
npm run lint             # ESLint with auto-fix
npm run format           # Format with Prettier
npm run test             # Run unit tests with Jest
npm run test:watch       # Run tests in watch mode
npm run test:cov         # Run tests with coverage
npm run test:e2e         # Run e2e tests
```

### Running Both Simultaneously
Open two terminals:
```bash
# Terminal 1
cd frontend && npm run dev

# Terminal 2
cd backend && npm run start:dev
```

## Environment Variables

### Backend (.env)
```
PORT=3001
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## API Structure

### Base URL
All API endpoints are prefixed with `/api`:
- Development: `http://localhost:3001/api`
- Swagger docs: `http://localhost:3001/api/docs`

### Available Endpoints
- **Stories**: `/api/stories` - CRUD operations, supports `?category=` query param
- **Categories**: `/api/categories` - Category management

### Controllers Pattern
Controllers use:
- Swagger decorators (`@ApiTags`, `@ApiOperation`, `@ApiResponse`)
- Class-validator DTOs for request validation
- Standard REST conventions (GET, POST, PATCH, DELETE)

## Testing

### Backend Testing
- Jest configuration in package.json
- Unit tests: `*.spec.ts` files in `src/` directory
- E2E tests: `test/app.e2e-spec.ts` with `jest-e2e.json` config
- Coverage output to `coverage/` directory

### Frontend Testing
No test framework currently configured.

## Important Notes

- The application is in Vietnamese (`lang="vi"` in HTML root)
- Frontend uses custom fonts loaded from Google Fonts with CSS variables
- Backend uses in-memory storage - data is not persisted between restarts
- No database or ORM configured yet (suitable for adding TypeORM/Prisma)
- No authentication implemented yet
- Image domains configured for `localhost` only in Next.js config
