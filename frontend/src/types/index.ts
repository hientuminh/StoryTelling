export interface Story {
  id: string
  title: string
  description: string
  content: string
  coverImage?: string
  ageRange: string
  category: string
  duration: number
  audioUrl?: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon?: string
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}
