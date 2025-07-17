import { PenTool } from "lucide-react";
import { assets } from "../../assets/assets";

const BlogHero = () => {
  return (
    <div className="w-full relative h-[500px] md:h-[400px] lg:h-[450px]">
      {/* Background Image */}
      <img
        src={assets.blogHero}
        alt="Blog Hero"
        className="w-full h-full object-cover object-center brightness-105"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="bg-black/5 backdrop-blur-md p-8 md:p-12 rounded-2xl mt-10 text-black text-center max-w-4xl w-full mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Blog</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-600">
            Career tips, industry insights, and the latest job market trends to help you grow.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="btn btn-lg my-button border border-[#befd01] flex gap-2.5 items-center">
              Write for us <PenTool size={20} strokeWidth={1.25} />
            </button>
            <button className="btn btn-lg  bg-transparent border-lime-400">
              Explore blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
