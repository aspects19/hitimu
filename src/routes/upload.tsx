import { createFileRoute } from '@tanstack/react-router';
import { GuestGuard } from '../utils/guard';
import { useState } from 'react';
import { useUser } from '../context/user';
import { uploadFile } from '../lib/appwrite';
import Footer from '../components/Footer';
import { AppwriteException } from 'appwrite';

export const Route = createFileRoute('/upload')({
  component: RouteComponent,
  beforeLoad: async () => GuestGuard(),
});

function RouteComponent() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

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
    try {
      if (user) {
        uploadFile(user.$id, file, title, description);
      } else {
        setUploadStatus('User is not logged in.');
      }
      setUploadStatus('File uploaded successfully!');
      setFile(null);
      setTitle('');
      setDescription('');
    } catch (err) {
      if (err instanceof AppwriteException) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="my-auto flex h-full flex-col items-center justify-between">
      <div className="mx-auto max-w-md p-4">
        <h2 className="mb-4 text-center text-2xl font-bold">Upload Study Material</h2>
        {uploadStatus && <p className="text-red-500">{uploadStatus}</p>}
        {error && <p className="text-red-500/50">{error}</p>}
        <div className="flex grow flex-col">
          <input
            placeholder="Document title"
            className="input mb-3"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered mb-3"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input type="file" className="file-input mb-3" onChange={handleFileChange} required />
          <button
            onClick={() => {
              if (!file) return;
              handleUpload(file);
            }}
            className="btn btn-accent flex max-w-80"
          >
            Upload
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
