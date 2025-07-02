import { createFileRoute } from '@tanstack/react-router';
import { GuestGuard } from '../../utils/guard';
import { useUser } from '../../context/user';
import { Models } from 'appwrite';
import DocumentList from '../../components/DocuList';
import { useState, useEffect } from 'react';
import { getUserDocs } from '../../lib/appwrite';

export const Route = createFileRoute('/(tabs)/profile')({
  component: RouteComponent,
  beforeLoad: async () => GuestGuard(),
});

function RouteComponent() {
  const [documents, setDocuments] = useState<Models.Document[] | []>([]);
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
    <div className="flex h-full flex-col items-center justify-center pt-20">
      <div className="avatar">
        <div className="w-24 rounded-full p-1 ring ring-offset-0 ring-offset-green-300">
          {user ? (
            <div className="bg-accent/30 flex h-full w-full items-center justify-center rounded-full text-7xl font-extrabold">
              {user.name.toUpperCase()[0]}
            </div>
          ) : (
            <img alt="No user" src="/assets/no-user.png" />
          )}
        </div>
      </div>
      <span className="mt-4 text-xl font-bold">{user?.name}</span>
      <span className="mt-1 text-base">Student</span>
      <span className="mt-4 text-xl font-bold">Your Uploads</span>
      <div className="mt-4 flex w-full max-w-72 flex-row gap-5 overflow-x-auto whitespace-nowrap">
        {loading ? (
          <div className="card bg-base-200 h-32 w-48 animate-pulse"></div>
        ) : !documents.length ? (
          <p>You Haven't uploaded a document yet</p>
        ) : (
          <DocumentList documents={documents} />
        )}
      </div>
    </div>
  );
}
