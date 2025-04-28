import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import CountUp from 'react-countup';
import { PiStudentFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className='h-8 ml-4 mr-auto' src='/assets/hitimu-logo.png'/>
          </a>
        </div>
        <div className="flex gap-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                { loggedIn ? 
                  <img
                  alt="Tailwind CSS Navbar component"
                  src="/assets/default-pp.webp" 
                />
                :
                <button onClick={handleLogin} className="btn btn-primary">
                  Login
                </button>
                }
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="text-2xl font-extrabold text-center mt-15">
        Get free study materials <br/>
        Lecture notes, past papers, and more! <br/>
        <span className="text-xl font-normal">All in one place</span>
      </p>
      <div className="flex flex-col md:flex-row items-center mt-5">
        <label className="input mt-10">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
        <button className="btn w-full mx-[-7px] md:w-16 md:mt-10 md:ml-[-7px] btn-primary mt-2">Search</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        
        <div className=" flex items-center stat card bg-base-100 shadow-sm">
          <FaUniversity className="text-5xl text-primary" />
          <div className="stat-value text-primary">
            <CountUp end={500} duration={5} />
          </div>
          <h1 className="font-bold text-primary-content">Schools available</h1>
        </div>

        <div className=" flex items-center stat card bg-base-100 shadow-sm">
          <PiStudentFill className="text-5xl text-primary" />
          <div className="stat-value text-primary">
            <CountUp end={100} duration={5} />
          </div>
          <h1 className="font-bold text-primary-content">Students Joined</h1>
        </div>

        <div className=" flex items-center stat card bg-base-100 shadow-sm">
          <ImBooks className="text-5xl text-primary" />
          <div className="stat-value text-primary">
            <CountUp end={2000} duration={8} />
          </div>
          <h1 className="font-bold text-primary-content">Material available</h1>
        </div>
        
      </div>
    </div>
  );
};

