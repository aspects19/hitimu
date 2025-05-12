import { createFileRoute } from '@tanstack/react-router'
import { GuestGuard } from '../../utils/guard';
import { useUser } from '../../context/user';
import { Models } from 'appwrite';
import DocumentList from '../../components/DocuList';
import { useState, useEffect } from 'react';
import { getUserDocs } from '../../lib/appwrite';

export const Route = createFileRoute('/(tabs)/profile')({
  component: RouteComponent,
  beforeLoad: async() => GuestGuard()
})

function RouteComponent() { 
  const [documents, setDocuments] = useState<Models.Document[]| []>([]);
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    if (!user) return;
    const fetchDocuments = async () => {
      setLoading(true);
      try {
        const docs = await getUserDocs(user.$id);
        setDocuments(docs);
      } catch (error) {
        console.error('Error fetching documents:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchDocuments();
    }
  }, [user]);
  
  return (
  <div className='flex flex-col items-center pt-20 justify-center h-full'>
    
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-offset-green-300 ring-offset-0 p-1">
        {user ? (
          <div className=" w-full h-full flex items-center justify-center rounded-full text-7xl font-extrabold bg-accent/30">
            {user.name.toUpperCase()[0]}
          </div>
        ) : (
          <img
            alt="No user"
            src="/assets/no-user.png"
          />
        )}
      </div>
    </div>
    <span className='text-xl font-bold mt-4'>{user?.name}</span>
    <span className='text-base mt-1'>Student</span>
    <span className='text-xl font-bold mt-4'>Your Uploads</span>
    <div className='flex w-full flex-row gap-5 overflow-x-auto whitespace-nowrap mt-4 max-w-72 '>
      {loading ? 
        <div className="card w-48 h-32 bg-base-200 animate-pulse"></div> :
        (!documents.length ? 
          <p>You Haven't uploaded a document yet</p> :
          <DocumentList documents={documents} />
        )
        
      }
    </div>
  </div>
  );
};