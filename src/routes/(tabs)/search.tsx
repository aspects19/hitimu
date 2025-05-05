import { createFileRoute, useSearch } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { Models } from 'appwrite';
import {z} from 'zod';

import { GuestGuard } from '../../utils/guard';
import SearchBar from '../../components/search';
import DocumentList from '../../components/DocuList';
import { useUser } from '../../context/user';
import { getSearchDocs } from '../../lib/appwrite';

const docsSearchSchema = z.object({
	title: z.string().optional()
})

export const Route = createFileRoute('/(tabs)/search')({
  component: RouteComponent,
	beforeLoad: async() => GuestGuard(),
	validateSearch: docsSearchSchema,
})

function RouteComponent() {
	const {title} = useSearch({from: '/(tabs)/search'})
	const [docs, setDocs] = useState<Models.Document[]| []>([]);
		const [loading, setLoading] = useState(false);
	
		const { user } = useUser();
	
		useEffect(() => {
			if (!user) return;
			const fetchDocuments = async () => {
				setLoading(true);
				try {
					const searchQuery = title ? title : ""
					const docs = await getSearchDocs(searchQuery);
					setDocs(docs);
				} catch (error) {
					console.error('Error fetching documents:', error);
				} finally {
					setLoading(false);
				}
			};
	
			if (user) {
				fetchDocuments();
			}
		}, [user, title]);
  return (
    <div className='flex flex-col pt-10 items-center justify-center'>
      <SearchBar/>
			{ loading ? 
        <div className="card w-48 h-32 bg-base-200 animate-pulse"></div> :
        <DocumentList documents={docs} />
      }

    </div>
  )
}

