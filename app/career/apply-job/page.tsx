import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const page = () => {
    return (
        <div className='max-w-5xl mx-auto p-10'>
            <section>
        <h2 className="text-2xl font-semibold mb-6">Apply for a Position</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name">Name</label>
            <Input id="name" type="text" placeholder="Your Name" className="w-full" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="Your Email" className="w-full" />
          </div>
          <div>
            <label htmlFor="name">Position</label>
            <Input id="position" type="text" placeholder="Applied position" className="w-full" />
          </div>
          <div>
            <label htmlFor="resume">Resume</label>
            <Input id="resume" type="file" className="w-full" />
          </div>
          <div>
            <label htmlFor="coverLetter">Cover Letter</label>
            <Textarea id="coverLetter" placeholder="Your Cover Letter" className="w-full" />
          </div>
          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </section>
        </div>
    );
};

export default page;