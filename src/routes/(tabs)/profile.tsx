import { createFileRoute } from '@tanstack/react-router'
import { GuestGuard } from '../../utils/guard';

export const Route = createFileRoute('/(tabs)/profile')({
  component: RouteComponent,
  beforeLoad: async() => GuestGuard()
})

function RouteComponent() {
  // const Emerand = '#668f8';
  // const bondi = '#0a9684';

  return (
  <div className='flex flex-col items-center pt-20 justify-center h-full'>
    
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-primary ring-offset-base-300 ring-offset-2">
        <img className='p-[3px] rounded-full' src="/assets/default-pp.webp" />
      </div>
    </div>
    <span className='text-xl font-bold mt-4'>John Doe</span>
    <span className='text-base mt-1'>Student</span>
    <span className='text-xl font-bold mt-4'>Your Uploads</span>
    <div className='flex w-full flex-row gap-5 overflow-x-auto whitespace-nowrap mt-4 max-w-72 '>
      <div className="card  skeleton w-48 border-white border-1 h-40">Computer Science</div>
      <div className="card skeleton w-48 border-white border-1 h-40">Computer Science</div>
      <div className="card skeleton  w-48 border-white border-1 h-40">Computer Science</div>
      <div className="card skeleton w-48 border-white border-1 h-40">Computer Science</div>
      <div className="card skeleton w-48 border-white border-1 h-40">Computer Science</div>
      <div className="card skeleton w-48 border-white border-1 h-40">Computer Science</div>
    </div>
    <span className="text-xl font-bold mt-10 mb-2 block">Recently Viewed</span>
    <div className="flex gap-4 overflow-x-auto">
      <div className="card w-48 h-32 bg-base-200"></div>
      <div className="card w-48 h-32 bg-base-200"></div>
      <div className="card w-48 h-32 bg-base-200"></div>
    </div>

    <span className="text-xl font-bold mt-10 mb-2 block">Recommended</span>
    <div className="flex gap-4 overflow-x-auto mb-10">
      <div className="card w-48 h-32 bg-base-200"></div>
      <div className="card w-48 h-32 bg-base-200"></div>
      <div className="card w-48 h-32 bg-base-200"></div>
    </div>


    
  </div>
  );
};