import prisma from '@libs/prisma';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export type PageProps = {
	res: {
    id: string;
    url: string;
  }
};

export default function Redirect({ res }: PageProps) {
	const { push } = useRouter();
	useEffect(() => {
		push(res.url);
	});
	return (
		<div className='flex items-center justify-center h-screen w-screen'>
			<p className='text-6xl text-purple-600 font-extrabold'>
				{res.url ? 'Redirecting...' : '404 | Page Not Found'}
			</p>
		</div>
	);
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const { id } = context.query;
	const res = await prisma.uRL.findUnique({
		where: {
			id: String(id),
		},
	});
	return {
		props: {
			res
		},
	};
};
