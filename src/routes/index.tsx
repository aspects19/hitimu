import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

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
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
        <div className="card bg-base-100 w-96 shadow-sm">
          
          <div className="card-body items-center text-center">
            <h2 className="card-title text-center">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions">
              <button className="text-xl hover:font-bold ml-auto mr-0">{'>'}</button>
            </div>
          </div>
        </div>
        
      </div>
        
    </div>
  );
};

