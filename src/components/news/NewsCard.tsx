import { INewsArticle } from '@/lib/data/news';
import Image from 'next/image';

interface INewsCardProps {
  article: INewsArticle;
}

export default function NewsCard({ article }: INewsCardProps) {
  return (
    <div className="bg-white   shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 bg-gray-200">
          {article.image ? (
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={225}
              className="w-full h-48 object-cover"
            />
          ) : (
            <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
              <span className="text-orange-600 text-sm">画像</span>
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 bg-[#FFCC21] text-white px-3 py-2 text-xs font-medium tracking-widest">
          {article.date}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="flex flex-wrap gap-1">
          {article.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
