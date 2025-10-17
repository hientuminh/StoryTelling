import Link from 'next/link'
import { Story } from '@/types'
import { truncateText } from '@/lib/utils'

interface StoryCardProps {
  story: Story
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/stories/${story.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
          {story.coverImage ? (
            <img
              src={story.coverImage}
              alt={story.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-6xl">📖</span>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">
            {story.title}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {truncateText(story.description, 100)}
          </p>

          <div className="flex items-center justify-between text-sm">
            <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
              {story.ageRange}
            </span>

            <span className="text-gray-500">
              {story.duration} phút
            </span>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-100">
            <span className="text-xs text-gray-500 capitalize">
              {story.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
