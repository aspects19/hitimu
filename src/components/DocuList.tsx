import { useState, useEffect } from 'react';
import { getFilePreview } from '../lib/appwrite';
import type { Models } from 'appwrite';

const DocumentList = ({ documents }: { documents: Models.Document[] }) => {
  const [previewUrls, setPreviewUrls] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchPreviews = async () => {
      const urls: { [key: string]: string } = {};
      for (const doc of documents) {
        urls[doc.$id] = await getFilePreview(doc.$id);
      }
      setPreviewUrls(urls);
    };

    fetchPreviews();
  }, [documents]);

  if (!documents.length) return <p>No documents found.</p>;

  return (
    <div className="grid grid-cols-1 gap-4">
      {documents.map((doc: Models.Document) => (
        <div key={doc.$id} className="card bg-base-100 shadow-md p-4">
          <h3 className="text-lg font-semibold">{doc.title}</h3>
          <p className="text-sm text-gray-600">{doc.description}</p>
          <a
            href={doc.fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline mt-2"
          >
            {previewUrls[doc.$id] && (
              <img src={previewUrls[doc.$id]} alt={doc.title} />
            )}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;