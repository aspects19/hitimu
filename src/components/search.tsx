import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

function SearchBar() {
  const [query, setquery] = useState<string>('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate({
      to: '/search',
      search: query ? { title: query } : {},
    });
  };

  return (
    <div className="mt-5 flex flex-col items-center md:flex-row">
      <label className="input mt-10 w-full">
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
        <input
          type="search"
          required
          placeholder="Search"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
      </label>
      <button
        className="btn btn-primary mt-4 flex w-full md:mt-10 md:ml-[-7px] md:w-16"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
