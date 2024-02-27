import { getJobs } from '@/app/db/data-store';

import Link from 'next/link';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const jobs = await getJobs();

  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function Job({ params }: Props) {
  const [job] = await getJobs(params.slug);

  return (
    <div>
      <main>
        <h1>{job.title}</h1>
        <div style={{ marginBottom: '50px' }}>{job.description}</div>
        <Link href={'/'}>Go Back</Link>
      </main>
    </div>
  );
}
