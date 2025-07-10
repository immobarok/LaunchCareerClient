import axios from 'axios';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddJob = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { min, max, currency, ...rest } = data;
    const newJob = {
      ...rest,
      salaryRange: { min, max, currency }
    }
    newJob.requirements = data.requirements.split(',').map((item) => item.trim())
    newJob.responsibilities = data.responsibilities.split(',').map(item => item.trim());
    axios.post('http://localhost:4000/addJob', newJob)
      .then(res => {
        if (res.data.insertedId) {
          toast.success("Job added successfully")
        }
      }).catch((error) => {
        toast.error(error.message)
      })
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
          <h2 className="text-3xl font-bold text-gray-900">Post a New Job</h2>
          <p className="mt-2 text-gray-500 text-sm">Fill out the form below to create your job listing</p>
        </div>

        {/* Grid Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="label">Job Title <span className='text-lime-500'>*</span></label>
            <input {...register('title', { required: true })} type="text" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="Senior Product Designer" />
            {errors.title && <span className='text-xs text-red-600'>Job title is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Company <span className='text-lime-500'>*</span></label>
            <input {...register('company', { required: true })} type="text" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="Company Name" />
            {errors.company && <span className='text-xs text-red-600'>Company name is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Location <span className='text-lime-500'>*</span></label>
            <input {...register('location', { required: true })} type="text" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="e.g. Remote or Dhaka" />
            {errors.location && <span className='text-xs text-red-600'>Location is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Company Logo URL</label>
            <input {...register('company_logo')} type="text" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="https://yourlogo.com/logo.png" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Job Type <span className='text-lime-500'>*</span></label>
            <select {...register('jobType', { required: true })} className="border border-gray-300 text-gray-500 px-4 py-[7px] rounded w-full focus:ring-1 ring-lime-400 outline-none">
              <option value="">Select Type</option>
              <option>On-Site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
            {errors.jobType && <span className='text-xs text-red-600'>Job type is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Category <span className='text-lime-500'>*</span></label>
            <select {...register('category', { required: true })} className="border border-gray-300 text-gray-500 px-4 py-[7px] rounded w-full focus:ring-1 ring-lime-400 outline-none">
              <option value="">Select Category</option>
              <option>Engineering</option>
              <option>Marketing</option>
              <option>Finance</option>
              <option>Design</option>
            </select>
            {errors.category && <span className='text-xs text-red-600'>Category is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Application Deadline</label>
            <input {...register('deadline')} type="date" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Currency</label>
            <select {...register('currency')} className="border border-gray-300 text-gray-500 px-4 py-[7px] rounded w-full focus:ring-1 ring-lime-400 outline-none">
              <option>BDT</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Minimum Salary</label>
            <input {...register('min')} type="text" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="e.g. 50,000" />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Maximum Salary</label>
            <input {...register('max')} type="text" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="e.g. 80,000" />
          </motion.div>
        </div>

        {/* Textareas */}
        <motion.div variants={itemVariants}>
          <label className="label">Job Description <span className='text-lime-500'>*</span></label>
          <textarea {...register('description', { required: true })} rows={4} className="border border-gray-300 px-4 py-1.5 text-gray-500 outline-none ring-lime-500 rounded w-full" placeholder="Describe the job role in detail..."></textarea>
          {errors.description && <span className='text-xs text-red-600'>Description is required *</span>}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="label">Requirements <span className='text-lime-500'>*</span></label>
          <textarea {...register('requirements', { required: true })} rows={3} className="border border-gray-300 px-4 py-1.5 text-gray-500 outline-none ring-lime-500 rounded w-full" placeholder="List the job requirements...(separate by comma)"></textarea>
          {errors.requirements && <span className='text-xs text-red-600'>Requirements are required *</span>}
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="label">Responsibilities <span className='text-lime-500'>*</span></label>
          <textarea {...register('responsibilities', { required: true })} rows={3} className="border border-gray-300 px-4 py-1.5 text-gray-500 outline-none ring-lime-500 rounded w-full" placeholder="List responsibilities here...(separate by comma)"></textarea>
          {errors.responsibilities && <span className='text-xs text-red-600'>Responsibilities are required *</span>}
        </motion.div>

        {/* HR Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div variants={itemVariants}>
            <label className="label">Contact Person <span className='text-lime-500'>*</span></label>
            <input {...register('hr_name', { required: true })} type="text" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="e.g. HR Manager Name" />
            {errors.hr_name && <span className='text-xs text-red-600'>Contact person is required *</span>}
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="label">Contact Email <span className='text-lime-500'>*</span></label>
            <input {...register('hr_email', { required: true })} type="email" className="border border-gray-300 text-gray-500 px-4 py-1.5 rounded outline-none focus:ring-1 ring-lime-500 w-full" placeholder="hr@example.com" />
            {errors.hr_email && <span className='text-xs text-red-600'>Contact email is required *</span>}
          </motion.div>
        </div>

        {/* Submit */}
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="btn my-button w-full bg-[#BEFD01] hover:bg-[#a8e000] text-gray-900 font-bold px-8 py-2.5 rounded-lg shadow transition"
          >
            Post Job
          </motion.button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default AddJob;
