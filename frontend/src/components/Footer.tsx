import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4">
              Kể Chuyện Cho Bé
            </h3>
            <p className="text-gray-300">
              Ứng dụng kể chuyện tương tác giúp bé phát triển tư duy và khả năng ngôn ngữ.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Kết</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/stories" className="text-gray-300 hover:text-white transition-colors">
                  Truyện
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-300 hover:text-white transition-colors">
                  Thể Loại
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  Giới Thiệu
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên Hệ</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@kechuyenchobe.com</li>
              <li>Hotline: 1900 xxxx</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kể Chuyện Cho Bé. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
