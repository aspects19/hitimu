import { createFileRoute } from '@tanstack/react-router';
import { RiOpenSourceFill } from 'react-icons/ri';
import { PiUsersThreeDuotone } from 'react-icons/pi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { FaRegCheckCircle } from 'react-icons/fa';
import Footer from '../../components/Footer';

export const Route = createFileRoute('/(tabs)/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="flex max-w-4xl flex-col items-center px-6 py-16">
      <p className="mb-6 max-w-lg text-center text-lg">
        <span className="mt-8 bg-gradient-to-r bg-clip-text text-xl font-extrabold text-[#6ac37e]">
          Hitimu
        </span>{' '}
        is a free, open access platform for students to share and discover study materials without
        paywalls or upload restrictions. Built to promote <strong>SDG 4 - Quality Education</strong>
        , it connects learners across universities with resources they actually need.
      </p>

      <div>
        <h2 className="mt-8 mb-2 bg-gradient-to-r from-[#6ac37e] to-[#0a9684] bg-clip-text text-xl font-semibold text-transparent">
          Our Mission
        </h2>
        <p>
          Democratize academic access by removing the limits and barriers students face when looking
          for notes, past papers, and shared resources.
        </p>
        <div className="mt-3 ml-3 flex flex-col gap-2">
          <p className="flex flex-row items-center">
            <span className="mr-2 text-blue-400/60">
              <FaRegCheckCircle />
            </span>
            Hassle free access to Quality study material
          </p>
          <p className="flex flex-row items-center">
            <span className="mr-2 text-pink-400/60">
              <FaRegCheckCircle />
            </span>
            Open source based community mantained knowledge source
          </p>
          <p className="flex flex-row items-center">
            <span className="mr-2 text-green-400/60">
              <FaRegCheckCircle />
            </span>
            Making acces to learning resources free
          </p>
        </div>
      </div>

      <h2 className="mt-8 bg-gradient-to-r from-[#6ac37e] to-[#0a9684] bg-clip-text text-xl font-semibold text-transparent">
        Our values
      </h2>
      <div className="mt-8 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        <div className="card bg-base-200/60 mx-auto flex items-center border-[1px] border-gray-100/20 p-6 shadow-md hover:scale-101 hover:bg-blue-400/10">
          <div className="pb-3 text-[#aad10f]">
            <AiFillSafetyCertificate size={70} />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Quality</h2>
          <p>
            The quality of the documents submitted is of good quality as it comes from student
            submissions directly.
          </p>
        </div>

        <div className="card bg-base-200/60 mx-auto flex items-center border-[1px] border-gray-100/20 p-6 shadow-md hover:scale-101 hover:bg-blue-400/10">
          <div className="pb-3 text-[#0a963d]">
            <RiOpenSourceFill size={70} />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Open Source</h2>
          <p>
            The project is fully open source and community-driven. You can view the code on{' '}
            <a
              className="text-primary underline"
              href="https://github.com/aspects19/hitimu"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="card bg-base-200/60 mx-auto flex items-center border-[1px] border-gray-100/20 p-6 shadow-md hover:scale-101 hover:bg-blue-400/10">
          <div className="pb-3 text-[#0a9684]">
            <PiUsersThreeDuotone size={70} />
          </div>
          <h2 className="mb-2 text-xl font-semibold">Community driven</h2>
          <p>
            Resources in this project are available through uploads from students that use this
            website. This product also depends on the community for bug fixing and feature
            additions.
          </p>
        </div>
      </div>
      <div>
        <h2 className="mt-8 mb-2 bg-gradient-to-r from-[#6ac37e] to-[#0a9684] bg-clip-text text-xl font-semibold text-transparent">
          Meet the creator
        </h2>
        <h3 className="mb-2 text-xl text-gray-200">Jeffarson Amenya</h3>
        <p className="mb-6 leading-relaxed text-gray-400">
          As a passionate Telecommunication and IT student, I often had trouble getting access to
          quality school content which was often behind paywalls or you had to upload atleast five
          documents to access a single document. That's why I gave it upon myself to build Hitimu,
          an open-source content sharing platform.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <svg
              className="h-5 w-5 text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
              />
            </svg>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:jeffamenya388@gmail.com"
              className="text-blue-400 hover:text-blue-300"
            >
              jeffamenya388@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              className="h-5 w-5 text-purple-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-gray-400">Telecommunication and IT Student & Web Developer</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
