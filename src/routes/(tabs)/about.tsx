import { createFileRoute } from '@tanstack/react-router';
import { RiOpenSourceFill } from "react-icons/ri";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import Footer from '../../components/Footer';

export const Route = createFileRoute('/(tabs)/about')({
  component: AboutPage,
})


function AboutPage() {
  return (
    <div className="flex flex-col items-center px-6 py-16 max-w-4xl">
      <p className="text-lg mb-6 text-center max-w-lg">
        <span className='font-extrabold text-xl mt-8  bg-gradient-to-r text-[#6ac37e] bg-clip-text'>Hitimu</span> is a free, open access platform for students to share and discover study materials without paywalls or upload restrictions. 
        Built to promote <strong>SDG 4 - Quality Education</strong>, it connects learners across universities with resources they actually need.
      </p>

      <div>
          <h2 className="text-xl font-semibold mb-2 mt-8  bg-gradient-to-r from-[#6ac37e]  to-[#0a9684] bg-clip-text text-transparent">Our Mission</h2>
          <p>
            Democratize academic access by removing the limits and barriers students face when looking for notes, past papers, and shared resources.
          </p>
          <div className='mt-3 ml-3 flex flex-col gap-2'>
            <p className='flex flex-row items-center'>
              <span className='text-blue-400/60 mr-2'><FaRegCheckCircle/></span>
              Hassle free access to Quality study material
            </p>
            <p className='flex flex-row items-center'>
              <span className='text-pink-400/60 mr-2'><FaRegCheckCircle/></span>
              Open source based community mantained knowledge source
            </p>
            <p className='flex flex-row items-center'>
              <span className='text-green-400/60 mr-2 '><FaRegCheckCircle/></span>
              Making acces to learning resources free 
            </p>

          </div>
      </div>

        <h2 className="text-xl font-semibold mt-8  bg-gradient-to-r from-[#6ac37e]  to-[#0a9684] bg-clip-text text-transparent">Our values</h2>
      <div className="grid  grid-cols-1  md:grid-cols-3 gap-6 mt-8 w-full">
        
        <div className=" flex items-center card border-[1px] border-gray-100/20 mx-auto  bg-base-200/60 hover:bg-blue-400/10 hover:scale-101 shadow-md p-6">
          <div className='text-[#aad10f] pb-3'>< AiFillSafetyCertificate size={70} /></div>
          <h2 className="text-xl font-semibold mb-2">Quality</h2>
          <p>
            The quality of the documents submitted is of good quality as it comes from student submissions directly.
          </p>
        </div>

        <div className=" flex items-center card border-[1px] border-gray-100/20 mx-auto  bg-base-200/60 hover:bg-blue-400/10 hover:scale-101 shadow-md p-6">
          <div className='text-[#0a963d] pb-3'>< RiOpenSourceFill size={70} /></div>
          <h2 className="text-xl font-semibold mb-2">Open Source</h2>
          <p>
            The project is fully open source and community-driven. You can view the code on <a className="text-primary underline" href="https://github.com/aspects19/hitimu" target="_blank">GitHub</a>.
          </p>
        </div>

        <div className=" flex items-center card border-[1px] border-gray-100/20 mx-auto  bg-base-200/60 hover:bg-blue-400/10 hover:scale-101 shadow-md p-6">
          <div className='text-[#0a9684] pb-3'>< PiUsersThreeDuotone size={70} /></div>
          <h2 className="text-xl font-semibold mb-2">Community driven</h2>
          <p>
            Resources in this project are available through uploads from students that use this website. This product also depends on the community for bug fixing and feature additions.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2 mt-8  bg-gradient-to-r from-[#6ac37e]  to-[#0a9684] bg-clip-text text-transparent">
            Meet the creator
        </h2>
        <h3 className="text-xl  mb-2 text-gray-200">Jeffarson Amenya</h3>
        <p className="text-gray-400 leading-relaxed mb-6">
            
            As a passionate Telecommunication and IT student, I often had trouble getting access to quality school content which was often behind paywalls or you had to upload atleast five documents to access a single document. That's why I gave it upon myself to build Hitimu, an open-source content sharing platform.
        </p>
        <div className="space-y-4">
            <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                </svg>
                <a target="_blank" rel="noopener noreferrer" href="mailto:jeffamenya388@gmail.com" className="text-blue-400 hover:text-blue-300">
                    jeffamenya388@gmail.com
                </a>
            </div>
            <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-gray-400">Telecommunication and IT Student & Web Developer</span>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
