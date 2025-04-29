import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/upload')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Study Material</h2>
        
        <form className='flex flex-col items-center' onSubmit={()=> {}}>
          <input type="text" placeholder="Title" className="input input-bordered mb-3" required />
          <input type="text" placeholder="Subject" className="input input-bordered mb-3" required />
          <textarea placeholder="Description (optional)" className="textarea textarea-bordered mb-3"></textarea>
          <input type="file" className="file-input file-input-bordered mb-3" required />
          <button type="submit" className="btn btn-primary w-full">Upload</button>
        </form>
      </div>

    
  );
}
