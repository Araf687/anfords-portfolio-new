import React from "react";
import Image from "next/image";
import contactBG from "@/assets/image/landing-page/contactBG.svg";
import phoneIcon from "@/assets/icons/landing-page/phoneIcon.svg";
import mailIcon from "@/assets/icons/landing-page/mailIcon.svg";
import socialLinkIcon from "@/assets/icons/landing-page/socialLinkIcon.svg";
import locationIcon from "@/assets/icons/landing-page/locationIcon.svg";
import SectionHeading from "@/components/ui/SectionHeading";
import SectionDescription from "@/components/ui/SectionDescription";
import leafIcon from "@/assets/icons/landing-page/leaf1.svg";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const ContactSection = () => {
  const contactLinkData = [
    {
      icon: phoneIcon,
      title: "Phone Number",
      data: ["+880-2-9353698", "+880-2-8314671"],
    },
    {
      icon: mailIcon,
      title: "Email",
      data: ["info@anfordslimited.com", "anfordsbangladeshlimited.com"],
    },
    {
      icon: locationIcon,
      title: "Location",
      data: ["7/1 New Eskaton Road, Ghaus Nagar, Dhaka-1000, Bangladesh"],
    },
    {
      icon: socialLinkIcon,
      title: "Social Links",
      data: [
        "facebook.com/anfordsbangladesh",
        "linkedin.com/company/anfords-bangladesh",
      ],
    },
  ];

  return (
    <div className="bg-[#001F4E] pt-10 text-white tracking-wide">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row px-4 sm:px-10 md:px-[80px] items-center gap-10 text-center md:text-left">
        <div className="space-y-6">
          <SectionHeading bgVarient="dark">Get In Touch</SectionHeading>
          <SectionDescription className="md:pr-[60px]">
            Have questions or need assistance? We’re here to help! Reach out to
            <span className="text-[#2E9EFF]"> Anfords Bangladesh </span> for any
            inquiries about our products, services, or partnerships. Our team is
            ready to assist you with prompt and reliable support. Let’s connect!
          </SectionDescription>
        </div>
        <Image src={contactBG} alt="contact-background" height={250} className="w-full md:w-auto" />
      </div>

      {/* Contact Information Section */}
      <div className="bg-white text-black mt-12 px-4 sm:px-10 md:px-[80px] py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {contactLinkData.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image src={item.icon} alt={item.title} height={50} className="mb-3" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <div className="space-y-1">
              {item.data.map((info, idx) => (
                <p key={idx} className="text-gray-700">{info}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex flex-col md:flex-row justify-between items-center py-5 px-4 sm:px-10 md:px-[80px] border-b-2 border-green-600">
        <div className="flex items-center gap-3 text-center md:text-left">
          <Image src={leafIcon} alt="leafIcon" height={30} />
          <p className="uppercase text-sm sm:text-base">
            Anfords Bangladesh © 2025 | All Rights Reserved
          </p>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="group text-gray-400 transition duration-300" aria-label="Facebook">
            <Facebook className="w-6 h-6 group-hover:text-[#1877F2]" />
          </a>
          <a href="#" className="group text-gray-400 transition duration-300" aria-label="Twitter">
            <Twitter className="w-6 h-6 group-hover:text-[#1DA1F2]" />
          </a>
          <a href="#" className="group text-gray-400 transition duration-300" aria-label="Instagram">
            <Instagram className="w-6 h-6 group-hover:text-[#E1306C]" />
          </a>
          <a href="#" className="group text-gray-400 transition duration-300" aria-label="YouTube">
            <Youtube className="w-6 h-6 group-hover:text-[#FF0000]" />
          </a>
        </div>
      </div>

      {/* Developer Credit */}
      <p className="py-2 text-center text-sm text-gray-400 uppercase">
        Developed and maintained by CODEX 2.0 team
      </p>
    </div>
  );
};

export default ContactSection;
