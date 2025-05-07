import { createFileRoute } from '@tanstack/react-router'
import CountUp from 'react-countup';
import Footer from '../components/Footer';
import { PiStudentFill } from "react-icons/pi";
import { FaUniversity } from "react-icons/fa";
import { ImBooks } from "react-icons/im";

import SearchBar from '../components/search';
import Navbar from '../components/navbar';

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  
  // const {user, logout} = useUser();
  // const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center'>
      <Navbar/>
      
      <p className="text-2xl font-extrabold text-center mt-15">
        Get free study materials <br/>
        Lecture notes, past papers, and more! <br/>
        <span className="text-xl font-normal mt-4">All in one place</span><br/>
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
      <a href='/upload'>
        <button className='btn btn-accent'>Add a study material</button>
      </a>
      <Footer/>
    </div>
  );
};

