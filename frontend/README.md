# Frontend - Kể Chuyện Cho Bé

Frontend của ứng dụng kể chuyện cho bé được xây dựng với Next.js, TailwindCSS và TypeScript.

## Công Nghệ

- **Next.js 14** - React framework với App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool (optional)

## Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Start production server
npm start

# Type checking
npm run type-check

# Linting
npm run lint
```

## Cấu Trúc Thư Mục

```
frontend/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # Reusable components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── StoryCard.tsx
│   ├── lib/              # Utility functions
│   │   └── utils.ts
│   ├── types/            # TypeScript types
│   │   └── index.ts
│   └── styles/           # Global styles
│       └── globals.css
├── public/               # Static files
├── tailwind.config.ts    # TailwindCSS config
├── tsconfig.json         # TypeScript config
├── next.config.js        # Next.js config
└── package.json
```

## Environment Variables

Tạo file `.env.local`:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## Features

- Responsive design
- TailwindCSS với custom theme colors
- TypeScript cho type safety
- Path aliases (@/components, @/lib, etc.)
- SEO-friendly với metadata
- Google Fonts (Inter, Poppins)

## Development

Server sẽ chạy tại `http://localhost:3000`

API endpoint mặc định: `http://localhost:3001`
