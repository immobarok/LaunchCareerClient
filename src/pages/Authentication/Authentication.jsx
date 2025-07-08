import { AlertOctagon, X } from 'lucide-react';
import { assets } from '../../assets/assets';
import useAuth from '../../hooks/UseAuth';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'motion/react';
import SocialLogin from './SocialLogin';
import { useForm } from "react-hook-form"
import { useLoaderData, useLocation, useNavigate } from 'react-router';

const Authentication = () => {
  const { showLogin, setShowLogin, user, createUser, signInUser, signOutUser } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [state, setState] = useState('login');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || '/';

  const isSignup = state === 'signup';

  const onSubmit = (data) => {
    const { email, password } = data;
    isSignup ? createUser(email, password) : signInUser(email, password);
  }



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
        <div className='w-full md:w-1/2 p-8 relative'>
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
          <SocialLogin from={from} />

          {/* Divider */}
          <div className="divider mt-4">OR</div>

          {/* Form Fields */}
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-1'>
            {isSignup && (
              <div className='flex flex-col'>
                <label className='text-sm text-gray-800'>Name</label>
                <input  {...register("name", { required: true })} type="text" name='name' placeholder='eg. mobarok ali' className='border border-gray-300 px-4 py-2 rounded-lg focus:ring-1 outline-none ring-lime-500 text-gray-700 font-normal text-sm' />
                {errors.name?.type === 'required' && <p className='text-red-500 text-sm'>name is required</p>}
              </div>
            )}
            <div className='flex flex-col'>
              <label className='text-sm text-gray-800'>Email</label>
              <input {...register('email', { required: true })} type="email" name='email' placeholder='eg. mobarok@gmail.com' className='border border-gray-300 px-4 py-2 rounded-lg focus:ring-1 outline-none ring-lime-500 text-gray-700 font-normal text-sm' />
              {
                errors.email?.type === 'required' && <p className='text-red-500 text-sm'>Email is required</p>
              }
            </div>
            <div className='flex flex-col'>
              <label className='text-sm text-gray-800'>Password</label>
              <input {...register('password', { required: true, minLength: 6 })} type="password" name='password' placeholder='•••••••••' className='border border-gray-300 px-4 py-2 rounded-lg focus:ring-1 outline-none ring-lime-500 text-gray-700 font-normal text-sm' />
              {
                errors.password?.type === 'required' && <p className='text-sm text-red-500'>Password is required </p>
              }
              {
                errors.password?.type === 'minLength' && <p className='text-red-500 text-sm'>Password must be 6 character or long</p>
              }
            </div>
            <p className='text-sm '>
              {isSignup ? (
                <>Already have an account? <button type="button" className="underline font-medium cursor-pointer" onClick={() => setState('login')}>Login</button></>
              ) : (
                <>Don't have an account? <button type="button" className="underline font-medium cursor-pointer" onClick={() => setState('signup')}>Signup</button></>
              )}
            </p>

            <button type='submit' className='btn btn-primary my-3' >
              {isSignup ? 'Signup' : 'Login'}
            </button>
            {/* Switch Link */}

          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Authentication;
