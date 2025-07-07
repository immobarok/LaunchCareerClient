import { X } from 'lucide-react';
import { assets } from '../assets/assets';
import useAuth from '../hooks/UseAuth';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'motion/react';

const Authentication = () => {
  const { showLogin, setShowLogin } = useAuth();
  const [state, setState] = useState('login');

  const isSignup = state === 'signup';

  return (
    <div className='fixed inset-0 z-50 backdrop-blur-[1px] bg-black/10 flex items-center justify-center px-4'>
      <motion.div
        initial={{ opacity: 0, scale: 0.55, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: -20 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-[700px] border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-lg flex relative"
      >
        {/* Left Image */}
        <figure className='w-1/2 hidden md:block'>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1200, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full"
          >
            <SwiperSlide>
              <img src={assets.login_image1} alt="slide1" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={assets.login_image2} alt="slide2" className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={assets.login_image3} alt="slide3" className="w-full h-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </figure>

        {/* Right Form */}
        <form className='w-full md:w-1/2 p-8 relative'>
          {/* Close Button */}
          <button onClick={() => setShowLogin(false)} type="button" className="absolute top-4 right-4 text-gray-400 hover:text-black transition">
            <X size={20} />
          </button>

          {/* Title */}
          <div className='flex gap-2 items-center justify-center'>
            <p className='text-center font-bold text-2xl'>Welcome to</p>
            <figure className='flex items-center justify-center'>
              <img
                src={assets.logo}
                alt=""
                className="w-8 h-8 object-cover saturate-200 brightness-105 contrast-150"
              />
              <h1 className='font-bold text-2xl'>JobPilot <span className='text-primary'>.</span></h1>
            </figure>
          </div>

          {/* Social Logins */}
          <div className='flex flex-col gap-2 mt-5'>
            <button className="btn bg-black text-white border-black">
              <svg aria-label="GitHub logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg>
              Login with GitHub
            </button>

            {/* Google */}
            <button className="btn bg-white text-black border-[#e5e5e5]">
              <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>
          </div>

          {/* Divider */}
          <div className="divider mt-4">OR</div>

          {/* Form Fields */}
          <div className='flex flex-col gap-1'>
            {isSignup && (
              <div className='flex flex-col'>
                <label className='text-sm text-gray-800'>Name</label>
                <input type="text" name='name' placeholder='eg. mobarok ali' className='border border-gray-300 px-4 py-2 rounded-lg focus:ring-1 outline-none ring-lime-500 text-gray-700 font-normal text-sm' />
              </div>
            )}
            <div className='flex flex-col'>
              <label className='text-sm text-gray-800'>Email</label>
              <input type="email" name='email' placeholder='eg. mobarok@gmail.com' className='border border-gray-300 px-4 py-2 rounded-lg focus:ring-1 outline-none ring-lime-500 text-gray-700 font-normal text-sm' />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm text-gray-800'>Password</label>
              <input type="password" name='password' placeholder='•••••••••' className='border border-gray-300 px-4 py-2 rounded-lg focus:ring-1 outline-none ring-lime-500 text-gray-700 font-normal text-sm' />
            </div>
            <p className='text-sm '>
              {isSignup ? (
                <>Already have an account? <button type="button" className="underline font-medium cursor-pointer" onClick={() => setState('login')}>Login</button></>
              ) : (
                <>Don't have an account? <button type="button" className="underline font-medium cursor-pointer" onClick={() => setState('signup')}>Signup</button></>
              )}
            </p>

            <button className='btn btn-primary my-3'>
              {isSignup ? 'Signup' : 'Login'}
            </button>
            {/* Switch Link */}

          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Authentication;
