import { createFileRoute, useNavigate } from '@tanstack/react-router'
import CountUp from 'react-countup';
import { PiStudentFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

import SearchBar from '../components/search';
import { useUser } from '../context/user';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  
  const {user, logout} = useUser();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      {/* To be moved */}
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
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user ? "/assets/default-pp.webp" : "/assets/no-user.png"} 
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li  onClick={()=>{throw navigate({to: '/profile'});}}><a> Profile </a></li>
              <li onClick={logout}><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <p className="text-2xl font-extrabold text-center mt-15">
        Get free study materials <br/>
        Lecture notes, past papers, and more! <br/>
        <span className="text-xl font-normal">All in one place</span>
      </p>
      <SearchBar/>
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

