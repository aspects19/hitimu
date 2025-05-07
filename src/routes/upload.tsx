import { createFileRoute } from '@tanstack/react-router'
import { GuestGuard } from '../utils/guard';
import { useState } from 'react';
import { useUser } from '../context/user';
import { uploadFile } from '../lib/appwrite';
import Footer from '../components/Footer';

export const Route = createFileRoute('/upload')({
  component: RouteComponent,
  beforeLoad: async() => GuestGuard()
})


function RouteComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const { user } = useUser();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async (file: File) => {
    if (!file) {
      setUploadStatus('Please select a file.');
      return;
    }
    try{
      if (user) {
        uploadFile(user.$id, file, title, description); 
      } else {
        setUploadStatus('User is not logged in.');
      }
      setUploadStatus('File uploaded successfully!');
      setFile(null);
      setTitle("")
      setDescription("");
  
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus('Error uploading file. Please try again.'); 
    } 
    
  };

  return (
    <div className='flex flex-col h-full items-center justify-between my-auto'>
      <div className="max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Upload Study Material</h2>
        {uploadStatus && <p className="text-red-500">{uploadStatus}</p>}
        <div className='flex flex-col grow'>
          <input placeholder='Document title' className=' input mb-3' onChange={(e) => setTitle(e.target.value)} />
          <textarea placeholder="Description" className="textarea textarea-bordered mb-3" onChange={(e) =>setDescription(e.target.value)}></textarea> 
          <input type="file" className="file-input mb-3" onChange={handleFileChange} required />
          <button onClick={()=>{ if (!file) return; handleUpload(file)}} className="btn btn-accent flex max-w-80 ">Upload</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
