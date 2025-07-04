import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { useUser } from '../context/user';

interface NavbarProps {
  placeholder?: string;
}

const Navbar: React.FC<NavbarProps> = ({ placeholder = 'Search' }) => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Hardcoded "API" results
  const materials = [
    'React Basics',
    'Advanced Node.js',
    'TypeScript Essentials',
    'Frontend Design Patterns',
  ];

  const filtered = materials.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Ref for search input
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputWidth, setInputWidth] = useState<number>(0);

  useEffect(() => {
    if (inputRef.current) {
      setInputWidth(inputRef.current.offsetWidth);
    }
  }, [searchQuery]);

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">
          <img className="mr-auto ml-4 h-8" src="/assets/hitimu-logo.png" alt="Logo" />
        </a>
      </div>

      <div className="relative flex gap-2">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="input input-bordered w-24 md:w-64"
          />

          {searchQuery && (
            <div
              className="bg-base-100 absolute z-50 mt-1 rounded border border-gray-300 shadow"
              style={{ width: inputWidth }}
            >
              <p className="px-3 py-2 text-sm font-semibold">Results:</p>
              {filtered.length > 0 ? (
                <ul className="px-3 pb-2">
                  {filtered.map((item, index) => (
                    <li
                      key={index}
                      className="hover:bg-base-200 cursor-pointer rounded px-1 py-1 text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 pb-2 text-sm text-gray-500">No matching materials found.</p>
              )}
            </div>
          )}
        </div>

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
