import React from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useUser } from '../context/user';

interface NavbarProps {
  placeholder?: string;
}

const Navbar: React.FC<NavbarProps> = ({ placeholder = 'Search' }) => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img className="mr-auto ml-4 h-8" src="/assets/hitimu-logo.png" alt="Logo" />
        </a>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-24 md:w-auto"
        />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user ? (
                <div className="bg-accent/30 flex h-10 items-center justify-center rounded-full pb-1 text-2xl font-extrabold">
                  {user.name.toUpperCase()[0]}
                </div>
              ) : (
                <img alt="No user" src="/assets/no-user.png" />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li onClick={() => navigate({ to: '/profile' })}>
              <a>Profile</a>
            </li>
            <li onClick={logout}>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
