import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

import React from 'react';

interface JobPosition {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
}

const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'We are looking for a skilled frontend developer experienced in React and TypeScript.',
    location: 'Remote',
    type: 'Full-Time',
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Join our team as a backend developer with experience in Node.js and databases.',
    location: 'New York, NY',
    type: 'Full-Time',
  },
  // Add more job positions as needed
];

const CareersPage: React.FC = () => {
  return (
    <div className="p-6 space-y-10 max-w-6xl mx-auto">
      <section>
        <h1 className="text-3xl font-semibold mb-6">Careers at Anfords Bangladesh limited</h1>
        <p className="text-lg text-gray-600">
          At Anford Bangladesh limited, we are dedicated to innovation and excellence. We are looking for passionate individuals to join our team and help us build the future.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl">Open Positions</h2>
        {jobPositions.map((job) => (
          <Card key={job.id} className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{job.description}</p>
              <p className="mt-2 text-gray-600">Location: {job.location}</p>
              <p className="mt-2 text-gray-600">Type: {job.type}</p>
              <Link href={`/career/apply-job`} passHref>
                <Button variant="outline" className="mt-4">Apply Now</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      
    </div>
  );
};

export default CareersPage;
