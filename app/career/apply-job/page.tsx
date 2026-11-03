import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PageHero from "@/components/ui/PageHero";
import UiButton from "@/components/ui/uiButton";
import React from "react";

const fieldClass =
  "h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-2 focus-visible:ring-brand-sky/40 focus-visible:ring-offset-0";

const page = () => {
  return (
    <>
      <PageHero crumb="Career" eyebrow="Join Us" title="Apply for a Position" />
      <section className="bg-brand-mist py-14 sm:py-20">
        <div className="container max-w-3xl">
          <form className="space-y-5 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-brand-navy">Name</label>
                <Input id="name" type="text" placeholder="Your Name" className={fieldClass} />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-brand-navy">Email</label>
                <Input id="email" type="email" placeholder="Your Email" className={fieldClass} />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="position" className="text-sm font-medium text-brand-navy">Position</label>
              <Input id="position" type="text" placeholder="Applied position" className={fieldClass} />
            </div>
            <div className="space-y-2">
              <label htmlFor="resume" className="text-sm font-medium text-brand-navy">Resume</label>
              <Input
                id="resume"
                type="file"
                className="h-auto cursor-pointer rounded-xl border-dashed border-slate-300 bg-brand-mist py-4 file:mr-4 file:rounded-full file:bg-brand-blue file:px-4 file:py-1.5 file:text-white"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="coverLetter" className="text-sm font-medium text-brand-navy">Cover Letter</label>
              <Textarea id="coverLetter" placeholder="Your Cover Letter" className="min-h-[140px] rounded-xl border-slate-200 focus-visible:ring-2 focus-visible:ring-brand-sky/40 focus-visible:ring-offset-0" />
            </div>
            <UiButton type="submit" className="w-full justify-center sm:w-auto">
              Submit Application
            </UiButton>
          </form>
        </div>
      </section>
    </>
  );
};

export default page;
