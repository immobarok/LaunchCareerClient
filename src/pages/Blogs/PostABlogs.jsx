import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";
import useAxiosSecure from "../../utils/axiosSecure";

const PostABlog = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [uploading, setUploading] = useState(false);
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [selectedCoverImage, setSelectedCoverImage] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);
  const [coverImagePreview, setCoverImagePreview] = useState(null);

  const axiosSecure = useAxiosSecure();

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedLogo(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedCoverImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  const onSubmit = async (data) => {
    //console.log("form data", data)
    setUploading(true);
    try {
      data.tags = data.tags.split(",").map((tag) => tag.trim());
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (data[key] !== undefined && data[key] !== '' && key !== 'logo' && key !== 'coverImage') {
          if (key === 'tags') {
            formData.append(key, JSON.stringify(data[key]));
          } else {
            formData.append(key, data[key]);
          }
        }
      });
      if (selectedLogo) {
        formData.append('logo', selectedLogo);
      }
      if (selectedCoverImage) {
        formData.append('coverImage', selectedCoverImage);
      }
      await axiosSecure.post("/blogs", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success("Blog posted successfully!");
      reset();
      setSelectedLogo(null);
      setSelectedCoverImage(null);
      setLogoPreview(null);
      setCoverImagePreview(null);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Something went wrong while posting.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6 my-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        variants={itemVariants}
        className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 space-y-8"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Post a New Blog</h2>
          <p className="mt-2 text-gray-500 text-sm">Fill out the form below to create your blog post</p>
        </div>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="label">Title <span className='text-lime-500'>*</span></label>
            <input
              {...register("title", { required: true })}
              type="text"
              className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full"
              placeholder="Blog title"
            />
            {errors.title && <span className='text-xs text-red-600'>Title is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Author <span className='text-lime-500'>*</span></label>
            <input
              {...register("author", { required: true })}
              type="text"
              className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full"
              placeholder="Author name"
            />
            {errors.author && <span className='text-xs text-red-600'>Author is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Published Date <span className='text-lime-500'>*</span></label>
            <input
              {...register("publisdedDate", { required: true })}
              type="date"
              className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full"
            />
            {errors.publisdedDate && <span className='text-xs text-red-600'>Published date is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Read Time <span className='text-lime-500'>*</span></label>
            <input
              {...register("readTime", { required: true })}
              type="text"
              className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full"
              placeholder="e.g. 5 min read"
            />
            {errors.readTime && <span className='text-xs text-red-600'>Read time is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Logo <span className='text-lime-500'>*</span></label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="logo-upload"
              />
              <label
                htmlFor="logo-upload"
                className="flex items-center justify-center w-full h-32 sm:h-36 md:h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-lime-400 transition-colors group"
              >
                {logoPreview ? (
                  <div className="relative w-full h-full">
                    <img
                      src={logoPreview}
                      alt="Logo preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/4 bg-opacity-100 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">Change Logo</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm font-medium">Click to upload logo</p>
                    <p className="text-gray-400 text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
              </label>
            </div>
            {errors.logo && <span className='text-xs text-red-600'>Logo is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Cover Image <span className='text-lime-500'>*</span></label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverImageChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                id="cover-upload"
              />
              <label
                htmlFor="cover-upload"
                className="flex items-center justify-center w-full h-32 sm:h-36 md:h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-lime-400 transition-colors group"
              >
                {coverImagePreview ? (
                  <div className="relative w-full h-full">
                    <img
                      src={coverImagePreview}
                      alt="Cover image preview"
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/4 bg-opacity-100 group-hover:bg-opacity-20 transition-all rounded-lg flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-sm">Change Cover Image</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center p-4">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-500 text-sm font-medium">Click to upload cover image</p>
                    <p className="text-gray-400 text-xs mt-1">PNG, JPG, GIF up to 10MB</p>
                  </div>
                )}
              </label>
            </div>
            {errors.coverImage && <span className='text-xs text-red-600'>Cover image is required *</span>}
          </motion.div>
        </div>

        {/* Tags */}
        <motion.div variants={itemVariants}>
          <label className="label">Tags (comma separated) <span className='text-lime-500'>*</span></label>
          <input
            {...register("tags", { required: true })}
            type="text"
            className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full"
            placeholder="e.g. HR, Salary, Negotiation"
          />
          {errors.tags && <span className='text-xs text-red-600'>Tags are required *</span>}
        </motion.div>

        {/* Textareas */}
        <motion.div variants={itemVariants}>
          <label className="label">Short Description <span className='text-lime-500'>*</span></label>
          <textarea
            {...register("shortDescription", { required: true })}
            rows={3}
            className="border border-gray-300 px-4 py-1.5 text-gray-500 outline-none ring-lime-500 rounded w-full"
            placeholder="Short intro of your blog"
          />
          {errors.shortDescription && <span className='text-xs text-red-600'>Short description is required *</span>}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="label">Full Content <span className='text-lime-500'>*</span></label>
          <textarea
            {...register("content", { required: true })}
            rows={8}
            className="border border-gray-300 px-4 py-1.5 text-gray-500 outline-none ring-lime-500 rounded w-full"
            placeholder="Write the full blog content here..."
          />
          {errors.content && <span className='text-xs text-red-600'>Content is required *</span>}
        </motion.div>

        {/* Submit */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={uploading}
            className="btn my-button w-full bg-[#BEFD01] hover:bg-[#a8e000] text-gray-900 font-bold px-8 py-2.5 rounded-lg shadow transition disabled:opacity-50"
          >
            {uploading ? 'Uploading...' : 'Post Blog'}
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default PostABlog;