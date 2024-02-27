const jobs = [
  {
    slug: 'mulberry-learning-bgc',
    title: 'Junior Web Developer',
    description: 'Familiar with modern front end development.',
  },
  {
    slug: 'mulberry-learning-greenhills',
    title: 'iOS Developer',
    description: 'Passionate for crafting great mobile experiences',
  },
  {
    slug: 'centers',
    title: 'iOS Developer',
    description: 'Passionate for crafting great mobile experiences',
  },
];

interface Job {
  slug: string;
  title: string;
  description: string;
}
export async function getJobs(slug?: string): Promise<Array<Job>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (slug) {
        const job = jobs.filter((j) => j.slug === slug);
        resolve(job);
      } else {
        resolve(jobs);
      }
    }, 1000);
  });
}
