import { createFileRoute } from '@tanstack/react-router'
import { GuestGuard } from '../utils/guard';
// import { uploadMaterial } from '../services/material';
import { useState } from 'react';
import { useUser } from '../context/user';



export const Route = createFileRoute('/upload')({
  component: RouteComponent,
  beforeLoad: async() => GuestGuard()
})

function RouteComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {upload} = useUser();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async (file: File) => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    try {
      await upload(file);
      alert('File uploaded successfully!');
    } catch (error) {
      setError('Failed to upload file. Please try again.');
      console.error('Upload error:', error);
      
    }
  };

  return (
    
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Study Material</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className='flex flex-col items-center' onSubmit={() => {if (file) handleUpload(file); }}>
          {/* <input type="text" placeholder="Title" className="input input-bordered mb-3" required />
          <input type="text" placeholder="Subject" className="input input-bordered mb-3" required />
          <textarea placeholder="Description (optional)" className="textarea textarea-bordered mb-3"></textarea> */}
          <input type="file" className="file-input file-input-bordered mb-3" onChange={handleFileChange} required />
          <button type="submit" className="btn btn-primary w-full">Upload</button>
        </form>
      </div>

    
  );
}
