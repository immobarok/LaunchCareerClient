import { NavLink } from 'react-router'
import { assets } from '../assets/assets'
import useAuth from '../hooks/UseAuth'
import { useEffect, useState } from 'react';
import { LogOutIcon, X } from 'lucide-react';

const Navbar = () => {
  const { user, signOutUser, showLogin, setShowLogin } = useAuth();
  const [show, setShow] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleToogler = () => {
    setShow(!show)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = <>
    <li>
      <NavLink to={'/'} className="hover:text-lime-500 transition" >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={'/myApplications'} className="hover:text-lime-500 transition" >
        MyApplications
      </NavLink>
    </li>
    <li>
      <NavLink to={'/addJob'} className="hover:text-lime-500 transition" >
        Add Job
      </NavLink>
    </li>
    <li>
      <NavLink to={'/pau'} className="hover:text-lime-500 transition" >
        Pricing
      </NavLink>
    </li>
  </>

  return (
    <nav
      className={`h-[70px] fixed w-full px-6 md:px-14 lg:px-18 xl:px-24 flex items-center justify-between z-20 text-gray-700 transition-all duration-300 ${isScrolled ? 'bg-white/60 shadow-md text-gray-700 backdrop-blur-md py-3 md:py-4' : 'py-4 md:py-6'
        }`}
    >
      <div className="flex-shrink-0">
        <a className='flex items-center gap-1'>
          <img className='h-10 w-10 sm:w-14 sm:h-14 saturate-200 contrast-150 brightness-95'
            src={assets.logo}
          />
          <h1 className='text-2xl sm:text-4xl font-bold'>JobPilot <span className='text-primary'>.</span></h1>
        </a>
      </div>
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex items-center gap-10 text-sm font-medium">
          {navlinks}
        </ul>
      </div>

      {/* Button - Right aligned */}
      <div className="flex-shrink-0">
        <div className="hidden md:block">
          {user ? (
            <div className='flex gap-2 items-center'>
              <p className='text-gray-600 text-sm font-medium'>Hi, {user?.displayName?.split(" ")[0]}!</p>
              <div className='relative group'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  className="w-8 h-8 border rounded-full border-lime-300 cursor-pointer"
                  src={user.photoURL ? user.photoURL : assets?.avatar}
                  alt="User Avatar"
                />
                {isHovered && (
                  <button
                    onClick={signOutUser}
                    type="button"
                    className="absolute top-8 right-0 bg-white text-sm px-3 py-1 rounded shadow-lg border border-gray-200 flex items-center gap-1 hover:bg-gray-100 z-50"
                  >
                    Logout <LogOutIcon size={14} />
                  </button>
                )}
              </div>
            </div>
          ) : (
            <button onClick={() => setShowLogin(true)} type="button" className="btn my-button">
              Register
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        {
          user ?
            <div className='flex gap-2 items-center sm:hidden'>
              <p className='text-gray-600 text-sm font-medium'><span className='text-lime-500'>Hi</span>, {user?.displayName?.split(" ")[0]}!</p>
              <img
                className="w-8 h-8 border rounded-full border-lime-300 cursor-pointer"
                src={user.photoURL ? user.photoURL : assets?.avatar}
                alt="User Avatar"
              />
            </div> : <button
              onClick={handleToogler}
              aria-label="menu-btn"
              type="button"
              className="menu-btn inline-block md:hidden active:scale-90 transition ml-4"
            >
              {show ? <X /> : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 30 30"
                  fill="#000"
                >
                  <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
                </svg>
              )}
            </button>
        }
      </div>

      {/* Mobile menu (appears below when toggled) */}
      <div className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 ${show ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col space-y-4 text-lg">
          {navlinks}
        </ul>
        {user ? (
          <button onClick={signOutUser} type="button" className="btn my-button mt-3">
            Logout
          </button>
        ) : (
          <button onClick={() => setShowLogin(true)} type="button" className="btn my-button mt-3">
            Register
          </button>
        )}
      </div>
    </nav>
  )
}

export default Navbar