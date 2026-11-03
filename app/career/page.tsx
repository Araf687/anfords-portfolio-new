import React from "react";
import Image from "next/image";
import UiButton from "@/components/ui/uiButton";
import careerBgSideImg from "@/assets/image/career/careerbannerSideImg.png";
import mockup from "@/assets/image/career/mockup.png";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Eyebrow from "@/components/ui/Eyebrow";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

// Icons
import user from "@/assets/icons/career/users.png";
import award from "@/assets/icons/career/award.png";
import graduation from "@/assets/icons/career/graduation.png";
import office from "@/assets/icons/career/office.png";
import map from "@/assets/icons/career/map.png";

const facilities = [
  {
    icon: office,
    heading: "Large Beautiful Office",
    description: "A modern, spacious office designed for comfort and productivity.",
  },
  {
    icon: user,
    heading: "Great Co-Workers",
    description: "Work with supportive, talented, and collaborative team members.",
  },
  {
    icon: map,
    heading: "Easy Location",
    description: "Conveniently located with easy access to transportation.",
  },
  {
    icon: graduation,
    heading: "Educational Opportunities",
    description: "Grow with training, workshops, and skill development programs.",
  },
  {
    icon: award,
    heading: "Performance Award",
    description: "Recognizing and rewarding exceptional performance and contributions.",
  },
];

const CareersPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <PageHero
        crumb="Career"
        eyebrow="Join Us"
        title="Anfords Bangladesh"
        description={
          <p className="text-lg text-white/85">
            Work at a leading FMCG company & unlock your true potential.
          </p>
        }
        image={careerBgSideImg}
        imageAlt="Grow your career at Anfords"
      >
        <UiButton varient="light" href="/career/apply-job">
          View Openings
        </UiButton>
      </PageHero>

      {/* Job life */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <Reveal>
              <Eyebrow>Culture</Eyebrow>
            </Reveal>
            <SectionHeading>Job Life At Anfords</SectionHeading>
            <Reveal delay={0.1}>
              <p className="text-2xl font-light text-brand-green sm:text-3xl">Bangladesh</p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[15px] leading-relaxed text-slate-600 md:text-base">
                At Anfords Bangladesh, we foster a workplace that encourages
                creativity, collaboration, and growth. As a leading FMCG company, we
                provide opportunities to learn, upskill, and take on new challenges
                to advance your career. We believe in inclusivity and teamwork,
                ensuring a supportive and engaging environment. Your contributions
                are valued and rewarded as we strive for excellence together. Join
                us and unlock your true potential.
              </p>
            </Reveal>
          </div>
          <Reveal direction="left" className="relative">
            <div className="absolute inset-10 rounded-full bg-brand-sky/20 blur-3xl" />
            <Image src={mockup} alt="Life at Anfords Bangladesh" className="relative mx-auto h-auto w-full max-w-md" sizes="(min-width: 1024px) 40vw, 90vw" />
          </Reveal>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-brand-mist py-16 sm:py-24">
        <Stagger className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {facilities.map((item, idx) => (
            <StaggerItem key={item.heading} className={idx === 0 ? "lg:row-span-2" : ""}>
              <div
                className={`group flex h-full flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-sky/40 hover:shadow-[0_30px_60px_-30px_rgba(0,90,170,0.4)] ${
                  idx === 0 ? "lg:justify-end lg:bg-gradient-to-br lg:from-brand-blue lg:to-brand-navy lg:text-white" : ""
                }`}
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-mist transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Image src={item.icon} alt="" width={30} height={30} />
                </div>
                <div>
                  <h3 className={`mb-2 text-lg font-semibold ${idx === 0 ? "text-brand-royal lg:text-2xl lg:text-white" : "text-brand-royal"}`}>
                    {item.heading}
                  </h3>
                  <p className={`text-sm leading-relaxed ${idx === 0 ? "text-slate-600 lg:text-white/75" : "text-slate-600"}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </div>
  );
};

export default CareersPage;
