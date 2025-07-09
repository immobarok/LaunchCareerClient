import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import { assets } from '../../assets/assets';
import { useParams } from 'react-router';
import useAuth from '../../hooks/UseAuth';
import axios from 'axios';
import toast from 'react-hot-toast';

const JobApply = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const { id: jobId } = useParams()
  const { user } = useAuth()

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const phone = form.phone.value;
    const something = form.something.value;

    const applicationData = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      phone,
      something
    }

    axios.post('http://localhost:4000/job-applications', applicationData)
      .then(res => {
        if (res.data.insertedId) {
          toast.success("Your application has been submitted")
          form.reset();
        }
      })
      .catch(error => {
        toast.error(error.message)
      })
  }

  //uplod pdf related hooks
  const fileInputRef = useRef(null);
  const handleFileClick = () => {
    fileInputRef.current.click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      setUploadSuccess(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-2xl my-20 border-t border-gray-100/80"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 text-center">Apply for the Job</h2>

      <form className="space-y-3" onSubmit={handleFormSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className='text-lime-400'>*</span></label>
            <input
              type="email"
              defaultValue={user?.email}
              placeholder="your@email.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-1 ring-lime-500"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number <span className='text-lime-400'>*</span></label>
            <input
              name='phone'
              type="tel"
              placeholder="+8801XXXXXXXXX"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-1 ring-lime-500"
              required
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile <span className='text-lime-400'>*</span></label>
            <input
              name='linkedIn'
              type="url"
              placeholder="https://linkedin.com/in/yourname"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-1 ring-lime-500"
            />
          </div>

          {/* Portfolio */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio Website</label>
            <input
              name='portfolio'
              type="url"
              placeholder="https://yourportfolio.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-1 ring-lime-500"
            />
          </div>

          {/* GitHub */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GitHub Profile</label>
            <input
              name='github'
              type="url"
              placeholder="https://github.com/yourusername"
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-1 ring-lime-500"
            />
          </div>
        </div>
        {/* Resume Upload - Full Width */}
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume <span className='text-lime-500'>(.pdf only)*</span></label>
        <div
          onClick={handleFileClick}
          className="w-full h-16 border border-dashed rounded-lg flex justify-center items-center text-gray-400 hover:bg-gray-50 cursor-pointer transition"
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileChange}
            accept=".pdf"
          />
          {
            uploadSuccess ? <p className="text-sm text-green-600 mt-2 flex gap-2 items-center">{selectedFile} uploaded successfully <Check /></p> :
              <>
                <img src={assets?.upload} alt="Upload" className="w-6 h-6 mr-2" />
                <span className="text-sm">Upload Resume</span>
              </>
          }
        </div>

        {/* Tell us something interesting*/}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tell us something interesting about your work</label>
          <textarea
            name='something'
            rows={4}
            placeholder="Your thoughts, achievements, passions..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm outline-none focus:ring-1 ring-lime-500"
          />
        </div>


        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
        >
          <Send className="w-4 h-4" />
          Submit Application
        </motion.button>
      </form>
    </motion.div>
  );
};

export default JobApply;
