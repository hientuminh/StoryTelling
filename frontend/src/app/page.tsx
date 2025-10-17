import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-600 animate-slide-up">
          Kể Chuyện Cho Bé
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
          Khám phá thế giới truyện kỳ thú cùng bé yêu
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link
            href="/stories"
            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Khám Phá Truyện
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            Về Chúng Tôi
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Thư Viện Phong Phú</h3>
            <p className="text-gray-600">Hàng trăm câu chuyện đa dạng cho bé</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Âm Thanh Sinh Động</h3>
            <p className="text-gray-600">Giọng kể chuyện hấp dẫn, thu hút</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Giao Diện Thân Thiện</h3>
            <p className="text-gray-600">Dễ sử dụng cho cả trẻ nhỏ</p>
          </div>
        </div>
      </div>
    </main>
  )
}
