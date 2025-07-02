import { createFileRoute } from '@tanstack/react-router';
import CountUp from 'react-countup';
import Footer from '../components/Footer';
import { PiStudentFill } from 'react-icons/pi';
import { FaUniversity } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';
import { MdEngineering } from 'react-icons/md';
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { GoLaw } from 'react-icons/go';
import { FaUserDoctor } from 'react-icons/fa6';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { GiMaterialsScience } from 'react-icons/gi';
import { FaPaintBrush } from 'react-icons/fa';

import SearchBar from '../components/search';
import Navbar from '../components/navbar';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  const categories = [
    { name: 'Engineering', icon: <MdEngineering className="text-3xl" /> },
    { name: 'Business', icon: <LuBriefcaseBusiness className="text-3xl" /> },
    { name: 'Law', icon: <GoLaw className="text-3xl" /> },
    { name: 'Medicine', icon: <FaUserDoctor className="text-3xl" /> },
    { name: 'Education', icon: <FaChalkboardTeacher className="text-3xl" /> },
    { name: 'IT', icon: <FaComputer className="text-3xl" /> },
    { name: 'Science', icon: <GiMaterialsScience className="text-3xl" /> },
    { name: 'Arts', icon: <FaPaintBrush className="text-3xl" /> },
  ];

  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <p className="mt-15 mb-3 text-center text-3xl font-extrabold"> Get free study materials </p>
      <p className="text-xl font-normal"> Lecture notes, past papers, and more! </p>
      <span className="mt-4">All in one place</span>
      <br />

      <SearchBar />
      <div className="grid-col-1 mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3">
        <div className="stat card bg-base-100 flex items-center shadow-sm">
          <FaUniversity className="text-primary text-5xl" />
          <div className="stat-value text-primary">
            <CountUp end={500} duration={5} />
          </div>
          <h1 className="text-primary-content font-bold">Schools available</h1>
        </div>

        <div className="stat card bg-base-100 flex items-center shadow-sm">
          <PiStudentFill className="text-primary text-5xl" />
          <div className="stat-value text-primary">
            <CountUp end={100} duration={5} />
          </div>
          <h1 className="text-primary-content font-bold">Students Joined</h1>
        </div>
        <div className="stat card bg-base-100 flex items-center shadow-sm">
          <ImBooks className="text-primary text-5xl" />
          <div className="stat-value text-primary">
            <CountUp end={2000} duration={8} />
          </div>
          <h1 className="text-primary-content font-bold">Material available</h1>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <p>Have a study material you'd like to share?</p>
        <a href="/upload">
          <button className="btn btn-primary mt-5">Upload a study material</button>
        </a>
      </div>

      <div className="mt-20 w-full max-w-6xl px-4">
        <h2 className="text-primary mb-4 text-center text-lg font-semibold">Available material</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {categories.map((subject) => (
            <div
              key={subject.name}
              className="card bg-base-100 hover:bg-primary flex flex-col items-center justify-center p-4 shadow-md transition hover:text-white"
            >
              {subject.icon}
              <span className="mt-2 text-lg font-medium">{subject.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-200">More about creator</h3>
            <p className="text-sm text-gray-400">
              {' '}
              Hi, I'm <span className="font-bold text-gray-200">Jeffarson Amenya</span>. A
              telecommunication student who believes information should be available freely and in
              the open domain.
            </p>
            <a
              href="https://github.com/aspects19"
              className="text-gray-400 transition-colors hover:text-white"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
