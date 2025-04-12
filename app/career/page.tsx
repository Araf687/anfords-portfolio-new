import React from "react";
import Image from "next/image";
import Link from "next/link";
import UiButton from "@/components/ui/uiButton";
import careerBg from "@/assets/image/career/careerbanner.png";
import careerBgSideImg from "@/assets/image/career/careerbannerSideImg.png";
import intersect from "@/assets/image/career/intersect.png";
import mockup from "@/assets/image/career/mockup.png";

// Icons
import user from "@/assets/icons/career/users.png";
import award from "@/assets/icons/career/award.png";
import graduation from "@/assets/icons/career/graduation.png";
import office from "@/assets/icons/career/office.png";
import map from "@/assets/icons/career/map.png";

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
    title: "Frontend Developer",
    description:
      "We are looking for a skilled frontend developer experienced in React and TypeScript.",
    location: "Remote",
    type: "Full-Time",
  },
  {
    id: 2,
    title: "Backend Developer",
    description:
      "Join our team as a backend developer with experience in Node.js and databases.",
    location: "New York, NY",
    type: "Full-Time",
  },
];

const facilities = [
  {
    icon: office,
    heading: "Large Beautiful Office",
    description:
      "A modern, spacious office designed for comfort and productivity.",
  },
  {
    icon: user,
    heading: "Great Co-Workers",
    description:
      "Work with supportive, talented, and collaborative team members.",
  },
  {
    icon: map,
    heading: "Easy Location",
    description: "Conveniently located with easy access to transportation.",
  },
  {
    icon: graduation,
    heading: "Educational Opportunities",
    description:
      "Grow with training, workshops, and skill development programs.",
  },
  // {
  //   icon: award,
  //   heading: "Performance Award",
  //   description:
  //     "Recognizing and rewarding exceptional performance and contributions.",
  // },
];

const CareersPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <Image src={careerBg} alt="banner" className="w-full h-auto" />

        <div className="absolute top-0 left-0 w-full flex">
          <div className="flex-1 flex justify-center items-center">
            <div className="p-20 space-y-8 text-white">
              <p className="text-3xl">Join Us</p>
              <p className="font-semibold">
                <span className="text-6xl text-[#2E9EFF]">Anfords </span>
                <span className="text-3xl text-[#00DD76]">Bangladesh</span>
              </p>
              <p className="text-lg tracking-wide">
                Work at a leading FMCG company & unlock your true potential.
              </p>
              <UiButton varient="dark">View Openings</UiButton>
            </div>
          </div>

          <div className="flex-1">
            <Image
              src={careerBgSideImg}
              alt="banner side img"
              className="max-w-xl pt-[100px]"
            />
            <div className="p-20 space-y-3 font-semibold text-white">
              <p className="text-6xl text-[#1263AD]">Job Life At</p>
              <p className="tracking-wide">
                <span className="text-5xl text-[#2E9EFF] font-semibold">
                  Anfords{" "}
                </span>
                <span className="text-xl text-[#00DD76] font-semibold">
                  Bangladesh
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 pl-20 gap-10">
          {facilities.map((item, idx) => (
            <div key={idx} className="bg-white flex items-start gap-4">
              <Image
                src={item.icon}
                alt={item.heading}
                width={40}
                height={40}
              />
              <div>
                <h3 className="font-semibold text-lg text-[#1263AD] mb-2">
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 px-20">
          <p className="text-gray-700 text-base px-5">
            At Anfords Bangladesh, we foster a workplace that encourages
            creativity, collaboration, and growth. As a leading FMCG company, we
            provide opportunities to learn, upskill, and take on new challenges
            to advance your career. We believe in inclusivity and teamwork,
            ensuring a supportive and engaging environment. Your contributions
            are valued and rewarded as we strive for excellence together. Join
            us and unlock your true potential.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Adjust height as needed */}
        <Image
          src={intersect} // or imported image
          alt="Background"
          className="w-auto h-auto"
        />
        <div className="absolute top-0">
          <div className="pl-20 pt-10">
            <div className="bg-white flex w-[400px] items-start gap-4">
              <Image src={award} alt={"award icon"} width={40} height={40} />
              <div>
                <h3 className="font-semibold text-lg text-[#1263AD] mb-2">
                  Performance Award
                </h3>
                <p className="text-sm text-gray-600">
                  Recognizing and rewarding exceptional performance and
                  contributions.
                </p>
              </div>
            </div>
          </div>
          <Image src={mockup} alt="mockup" className="px-20"/>
          

        </div>
      </div>
    </div>
  );
};

export default CareersPage;
