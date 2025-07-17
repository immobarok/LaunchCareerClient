import { Timer } from 'lucide-react';
import { Link } from 'react-router';

const BlogCard = ({ blog }) => {
  const { logo, coverImage, title, tags, readTime, content, author, publisdedDate,_id } = blog;
  const slicedContent = content.slice(0, 100) + "...";

  return (
    <Link to={'/'}
      data-aos="fade-up"
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <img
        src={coverImage}
        alt={title}
        className="w-full h-58 object-cover object-center p-4 rounded-tl-4xl rounded-tr-4xl"
      />

      {/* Tags */}
      <div className="px-5 flex flex-wrap gap-2 mb-1">
        {tags.map((tag, _id) => (
          <p className='badge badge-soft bg-lime-50' key={_id}>{tag}</p>
        ))}
      </div>

      {/* Content + Footer */}
      <div className="flex flex-col flex-grow justify-between p-5 pt-2 text-left">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <p className="text-gray-500 text-sm">{slicedContent}</p>
        </div>

        {/* Footer (Always Bottom) */}
        <div className="pt-4 border-t border-gray-200 mt-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img src={logo} alt={author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium text-gray-700">{author}</p>
                <p className="text-xs text-gray-400">{publisdedDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <Timer size={16} /> {readTime}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
