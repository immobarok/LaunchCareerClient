import { Link, NavLink } from 'react-router'
import { assets } from '../assets/assets'
import useAuth from '../hooks/UseAuth'
import { useState } from 'react';
import { X } from 'lucide-react';

const Navbar = () => {
  const { setShowLogin } = useAuth();
  const [show, setShow] = useState(false)

  const handleToogler = () => {
    setShow(!show)
  }

  const navlinks = <>
    <li>
      <NavLink to={'/'} className="hover:text-lime-500 transition" >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={'/servcies'} className="hover:text-lime-500 transition" >
        Services
      </NavLink>
    </li>
    <li>
      <NavLink to={'/port'} className="hover:text-lime-500 transition" >
        Portfolio
      </NavLink>
    </li>
    <li>
      <NavLink to={'/pau'} className="hover:text-lime-500 transition" >
        Pricing
      </NavLink>
    </li>
  </>
  return (
    <nav className="h-[70px] relative w-full px-6 md:px-14 lg:px-18 xl:px-24 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">
      <a className='flex items-center gap-1'>
        <img className='h-10 w-10 sm:w-14 sm:h-14 saturate-200 contrast-150 brightness-95'
          src={assets.logo}
        />
        <h1 className='text-2xl sm:text-4xl font-bold'>JobPilot <span className='text-primary'>.</span></h1>
      </a>
      <ul className="md:flex hidden items-center gap-10  text-sm font-medium">
        {navlinks}
      </ul>
      <button
        onClick={() => setShowLogin(true)}
        className="btn my-button hidden sm:block"
      >
        Register
      </button>
      <button
        onClick={handleToogler}
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition"
      >
        {
          show ? <X /> : <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            viewBox="0 0 30 30"
            fill="#000"
          >
            <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
          </svg>
        }

      </button>
      <div className={`mobile-menu absolute top-[70px] left-0 w-full bg-white p-6 ${show ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-4 text-lg">
          {navlinks}
        </ul>
        <button
          type="button"
          className="btn btn-primary mt-3"
        >
          Register
        </button>
      </div>
    </nav>

  )
}

export default Navbar
