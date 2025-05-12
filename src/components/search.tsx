import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

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
    <div className="flex flex-col md:flex-row items-center mt-5">
      <label className="input w-full mt-10">
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
        <input type="search" required placeholder="Search" value={query} onChange={(e) => setquery(e.target.value)} />
      </label>
      <button className=" flex btn w-full  md:w-16 md:mt-10 md:ml-[-7px] btn-primary mt-4" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default SearchBar